import { useState, useEffect } from "react";
import AdminLayout from "../../layout/admin";
import SaveButton from "../common/save";
import CategoryForm from "./CategoryForm";
import { AllCategory, UpdateCat } from "./functions";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
const UpdateCategory = () => {
  const { category } = useSelector((state) => ({ ...state }));
  const [singleCat, setSingleCat] = useState({});
  const [values, setValues] = useState({
    name: "",
    details: "",
  });
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (category) {
      const SingleCategory = category?.filter((c) => {
        return c.slug === params.slug;
      });
      SingleCategory && setSingleCat(SingleCategory[0]);
    }
  }, [category, params.slug]);

  useEffect(() => {
    if (singleCat) {
      setValues({
        ...values,
        name: singleCat?.name,
        details: singleCat?.details,
      });
    }
  }, [singleCat]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name || !values.details ) {
      return toast.error("All Fields are Required");
    }
    try {
      setLoading(true);
      UpdateCat(params.slug, values).then((res) => {
        if (res.error) {
          toast.error(res.error);
          setLoading(false);
        } else {
          AllCategory(dispatch);
          toast.success("Category Updated");
          setLoading(false);
          navigate("/categories");
        }
      });
    } catch (error) {
      toast.error(error);
      setLoading(false);
    }
  };
  return (
    <AdminLayout>
      <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
        <h1 className="text-[#248F59] font-serif text-3xl font-normal">
          Update Category
        </h1>
      </div>
      {!singleCat || category === null ? (
        <div className="flex flex-col items-center">
          {/* <AiOutlineLoading3Quarters className="text-6xl w-16 h-16 text-[#248F59] animate-spin" /> */}
          <span className="mt-4 text-gray-500 text-lg font-semibold">
            Loading...
          </span>
          <span className="mt-4 text-[#248F59] font-serif text-3xl font-semibold">
            No Category Found
          </span>
        </div>
      ) : (
        <>
          <CategoryForm values={values} setValues={setValues} />
          <SaveButton handleSubmit={handleSubmit} loading={loading} />
        </>
      )}
      <div className="float-right"> </div>
    </AdminLayout>
  );
};

export default UpdateCategory;
