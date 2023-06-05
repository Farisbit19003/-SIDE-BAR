import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import swal from "sweetalert";
import ConTable from "../../comp/Contact/ConTable";
import { AllContacts, DeleteContact } from "../../comp/user/Userfunction";
import AdminLayout from "../admin";
const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const { allContacts } = useSelector((state) => ({ ...state }));
  const [ok, setOk] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (allContacts?.length) {
      setContacts(allContacts);
    }
  }, [allContacts]);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        DeleteContact(id)
          .then((res) => {
            swal("Deleted SuccessFully", {
              icon: "success",
            });
            AllContacts(dispatch);
          })
          .catch((error) => {
            toast.error(error);
          });
      }
    });
  };
  const handleSearchInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  const Searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);
  return (
    <AdminLayout>
      <div className="p-3 md:p-6 mb-6 flex border border-[#f2f2f2] rounded flex-col sm:flex-row items-center justify-between bg-white ">
        <div>
          <h1 className="font-serif font-normal text-3xl text-[#248F59]">
            Contact Us
          </h1>
        </div>

        <div className="relative w-full max-w-md">
          <input
            onChange={handleSearchInputChange}
            type="search"
            placeholder="Type queries"
            className="w-full sm:py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
      </div>
      <ConTable
        ok={ok}
        contacts={contacts}
        handleDelete={handleDelete}
        Searched={Searched}
        keyword={keyword}
      />
    </AdminLayout>
  );
};

export default Contact;
