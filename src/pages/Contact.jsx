import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import swal from "sweetalert";
import ConTable from "../components/Contact/ConTable";
import Search from "../components/common/Search";
import { AllContacts, DeleteContact } from "../components/user/Userfunction";
import AdminLayout from "../layout/admin";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const { allContacts } = useSelector((state) => ({ ...state }));
  const [ok, setOk] = useState([]);
  const dispatch = useDispatch();

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

  const Searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);

  return (
    <>
      <AdminLayout>
        <div className="p-3 md:p-6 mb-6 flex border border-[#f2f2f2] rounded flex-col sm:flex-row items-center justify-between bg-white ">
          <div>
            <h1 className="font-serif font-normal text-3xl text-[#248F59]">
              Contact Us
            </h1>
          </div>
          {/* SEARCH */}
          <Search setKeyword={setKeyword}/>
        </div>
        {/* CONTACT TABLE */}
        <ConTable
          ok={ok}
          contacts={contacts}
          handleDelete={handleDelete}
          Searched={Searched}
          keyword={keyword}
        />
      </AdminLayout>
    </>
  );
};

export default Contact;
