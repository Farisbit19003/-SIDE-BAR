import React, { useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { toast } from "react-toastify";
import { SendMessage } from "./function";
import { LoadingOutlined } from "@ant-design/icons";

const ConTable = ({ contacts, handleDelete, keyword, Searched, ok }) => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  function handleMouseEnter(event) {
    const cell = event.currentTarget;
    const review = cell.textContent;
    cell.setAttribute("title", review);
    cell.classList.add("show-review");
  }

  function handleMouseLeave(event) {
    const cell = event.currentTarget;
    cell.removeAttribute("title");
    cell.classList.remove("show-review");
  }
  const openModal = (contact) => {
    setSelectedContact(contact);
    setShowModal(true);
    document.documentElement.classList.add("modal-open");
  };

  const closeModal = () => {
    setShowModal(false);
    document.documentElement.classList.remove("modal-open");
  };
  let row = 1;

  const handleMessage = (e) => {
    e.preventDefault();
    if (!message) {
      return toast.error("Please Add Message");
    }
    setLoading(true);
    SendMessage(selectedContact, message).then((res) => {
      if (res.error) {
        toast.error(res.error);
        setLoading(false);
      } else {
        toast.success("Message Send Succesfully");
        setShowModal(false);
        setLoading(false);
        document.documentElement.classList.remove("modal-open");
      }
    });
  };
  return (
    <>
      {!contacts || contacts.length === 0 ? (
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <span className="mt-4 text-gray-500 text-lg font-semibold">
              Loading...
            </span>
            <span className="mt-4 text-green-600 font-serif text-3xl font-normal">
              No Contact Found
            </span>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-6 flex border w-full bg-white shadow">
            <div className="mx-auto mt-2 h-fit w-full">
              <div className="flex flex-row justify-center items-center mx-2 my-2">
                <p className="flex font-sans font-semibold text-lg ">
                  Contacts us
                </p>
              </div>
              <div className="overflow-x-auto flex flex-col justify-center">
                <table className="mx-2 my-2 font-sans shadow">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2">Sr#</th>
                      <th className="px-4 py-2">Name</th>
                      <th className="px-4 py-2">Email</th>
                      <th className="px-4 py-2">Subject</th>
                      <th className="px-4 py-2">Description</th>
                      <th className="px-4 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts &&
                      contacts.filter(Searched(keyword)).map((item, index) => (
                        <tr
                          className="bg-white cursor-default whitespace-nowrap hover:bg-gray-100 border-b-2 font-sans"
                          key={index}
                        >
                          <td className="px-4 py-2">{row++}</td>
                          <td className="px-4 py-2">{item.name}</td>
                          <td className="px-4 py-2">{item.email}</td>
                          <td className="px-4 py-2">{item.subject}</td>
                          <td
                            className="px-4 py-2 text-ellipsis overflow-hidden max-w-xs"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            {item.discription}
                          </td>
                          <td className="px-4 py-2 b gap-2 cursor-pointer flex flex-row">
                            <BiTrash
                              onClick={() => handleDelete(item._id)}
                              size={25}
                              color="red"
                            />
                            <AiOutlineMessage
                              size={25}
                              color="green"
                              onClick={() => openModal(item)}
                            />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Modal */}
          {showModal && selectedContact && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-500">
              <div className="bg-white rounded-lg p-4 w-1/2 ">
                <h2 className="text-3xl border-b flex items-center justify-center font-serif text-[#248f59] mb-2">
                  Contact Details
                </h2>
                <div className="flex font-sans p-2 border-b flex-col">
                  <p className="font-semibold my-1 p-2">
                    Name:{" "}
                    <span className="ml-2 font-normal">
                      {selectedContact.name}
                    </span>
                  </p>
                  <p className="font-semibold my-1 p-2">
                    Email:{" "}
                    <span className="ml-2 font-normal">
                      {selectedContact.email}
                    </span>
                  </p>
                  <p className="font-semibold my-1 p-2">
                    Subject:{" "}
                    <span className="ml-2 font-normal">
                      {selectedContact.subject}
                    </span>
                  </p>
                  <p className="font-semibold my-1 p-2">
                    Description:{" "}
                    <span className="ml-2 font-normal">
                      {selectedContact.discription}
                    </span>
                  </p>
                  <div>
                    <h2 className="font-sans font-semibold p-2 my-1">
                      Message
                    </h2>
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      className="border h-12 outline-none rounded w-full focus:ring-green-600 "
                    />
                    <button
                      onClick={handleMessage}
                      className="bg-[#248f59] my-2 text-white hover:text-white hover:scale-95 transition-transform font-semibold font-sans uppercase py-2 px-4 rounded"
                    >
                      {loading ? <LoadingOutlined /> : "Send"}
                    </button>
                  </div>
                </div>
                <div className="flex mt-2 items-center justify-end">
                  <button
                    className="bg-[#248f59] text-white hover:text-white hover:scale-95 transition-transform font-semibold font-sans uppercase py-2 px-4 rounded"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ConTable;
