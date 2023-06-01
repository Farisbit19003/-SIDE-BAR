import { BiTrash } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export const UserTable = ({ handleDelete, users, keyword, Searched, ok }) => {
 let row=1;
  return (
    <>
      {!users || users.length === 0 ? (
        <div className="flex  justify-center">
          <div className="flex flex-col items-center">
            {/* <AiOutlineLoading3Quarters className="text-6xl w-16 h-16 text-[#248F59] animate-spin" /> */}
            <span className="mt-4 text-gray-500 text-lg font-semibold">
              Loading...
            </span>
            <span className="mt-4 text-[#248F59] font-serif text-3xl font-normal">
              No User Found
            </span>
          </div>
        </div>
      ) : (
        <div className="my-6  flex border bg-white shadow">
          <div className=" mx-auto mt-2 h-fit w-full">
            <div className="flex flex-row justify-center items-center mx-2 my-2">
              <p className="flex font-sans font-semibold text-lg ">Users</p>
            </div>
            <div className="overflow-x-auto flex flex-col justify-center">
              <table className="mx-2 my-2 font-sans shadow">
                <thead>
                  <tr className="bg-[#F2F2F2]">
                  <th className="px-4 whitespace-nowrap py-2">Sr#</th>
                    <th className="px-4 whitespace-nowrap py-2">Name</th>
                    <th className="px-4 whitespace-nowrap py-2">Email</th>
                    <th className="px-4 whitespace-nowrap py-2">Role</th>
                    <th className="px-4 whitespace-nowrap py-2">Status</th>
                    <th className="px-4 whitespace-nowrap py-2">Whatsapp</th>
                    <th className="px-4 whitespace-nowrap py-2">Address</th>
                    <th className="px-4 whitespace-nowrap py-2">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {users &&
                    users.filter(Searched(keyword)).map((item, index) => (
                      <tr
                        className="bg-white cursor-default whitespace-nowrap hover:!bg-gray-100 border-b-2 font-sans"
                        key={index}
                      >
                         <td className="px-4 py-2">{row++}</td>
                        <td className="px-4 py-2">{item.name}</td>
                        <td className="px-4 py-2 ">{item.email}</td>
                        <td className="px-4 py-2">{item.role}</td>
                        <td
                          className={`px-4 py-2 font-medium  ${
                            item.status === "Confirmed"
                              ? "text-[#248F59]"
                              : "text-red-600"
                          }`}
                        >
                          {item.status}
                        </td>
                        <td className="px-4 py-2">
                          {item.whatsapp && item.whatsapp}
                        </td>
                        <td className="px-4 py-2">
                          {item.address && item.address}
                        </td>
                        {item.role === "Admin" || ok.includes(item) ? (
                          ""
                        ) : (
                          <td className="px-2 py-2  justify-center flex  cursor-pointer">
                            <BiTrash
                              onClick={() => handleDelete(item._id)}
                              size={25}
                              color="red"
                            />
                          </td>
                        )}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
