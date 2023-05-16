import { useState } from "react";
import AdminLayout from "../../layout/admin";
import SaveButton from "../common/save";
import CategoryForm from "./CategoryForm";
import { toast } from "react-toastify";
import { CreateCategory } from "./functions";
import { useDispatch } from "react-redux";
import { AllCategory } from "./functions";
import { useNavigate } from "react-router-dom";
const NewCategory = () => {
  const [values, setValues] = useState({
    name: "",
    details: "",
  });
  const [loading, setLoading] = useState(false);
const dispatch=useDispatch();
const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name || !values.details) {
      return toast.error("All Fields are Required");
    }
    try {
      setLoading(true);
      CreateCategory(values).then((res) => {
        if (res.error) {
          toast.error(res.error);
          setLoading(false);
        } else {
          AllCategory(dispatch);
          toast.success("Category Created");
          setValues({
            name: "",
            details: "",
          });
          setLoading(false);
          navigate("/categories")
        }
      });
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <AdminLayout>
      <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
        <h1 className="text-[#248F59] font-serif text-3xl font-normal">
          Create New Category
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
export default NewCategory;
