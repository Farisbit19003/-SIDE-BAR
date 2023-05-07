import { useState } from "react";
import AdminLayout from "../../layout/admin";
import SaveButton from "../common/save";
import CategoryForm from "./CategoryForm";
import { toast } from "react-toastify";
import { CreateCategory } from "./functions";

const NewCategory = () => {
  const [values, setValues] = useState({
    name: "",
    details: "",
    ParentCategory: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name || !values.details || !values.ParentCategory) {
      return toast.error("ALl Fields are Required");
    }
    try {
      setLoading(true);
      CreateCategory(values).then((res) => {
        if (res.error) {
          toast.error(res.error);
          setLoading(false);
        } else {
          toast.success("Category Created");
          setValues({
            name: "",
            details: "",
            ParentCategory: "",
          });
          setLoading(false);
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
