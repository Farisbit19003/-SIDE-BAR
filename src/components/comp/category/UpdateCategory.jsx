import { useState, useEffect } from "react";
import AdminLayout from "../../layout/admin";
import SaveButton from "../common/save";
import CategoryForm from "./CategoryForm";
import {AllCategory, UpdateCat } from "./functions";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch,useSelector } from "react-redux";
const UpdateCategory = () => {
  const { category } = useSelector((state) => ({ ...state }));
  const [values, setValues] = useState({
    name: "",
    details: "",
    ParentCategory: "",
  });
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (params && params.slug) {
      if (category && category.length) {
        const SingleCategory = category.filter((c) => {
          return c.slug === params.slug;
        });
        if (SingleCategory.length<1) {
          toast.error("Not Found");
          navigate("/categories");
        } else {
          setValues({
            ...values,
            name: SingleCategory[0].name,
            details: SingleCategory[0].details,
            ParentCategory: SingleCategory[0].ParentCategory,
          });
        }
      }
    }
  }, [params && params.slug]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name || !values.details || !values.ParentCategory) {
      return toast.error("ALl Fields are Required");
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
          navigate("/categories")
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
      <CategoryForm values={values} setValues={setValues} />
      <div className="float-right">
        {" "}
        <SaveButton handleSubmit={handleSubmit} loading={loading} />
      </div>
    </AdminLayout>
  );
};

export default UpdateCategory;
