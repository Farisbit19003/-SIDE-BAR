import { Link } from "react-router-dom";

const SidebarItem = ({ icon, label, to }) => {
  return (
    <>
      <Link
        to={`${to}`}
        className="text-start text-gray-600 cursor-pointer
        flex rounded-lg p-2 ml-1 text-md font-medium
        items-center font-sans hover:bg-[#248F59] hover:text-[#F2F2F2]">
        <div className="flex flex-row justify-center items-center">
          <span className="align-middle flex mr-2">{icon}</span>
          <span>{label}</span>
        </div>
      </Link>
    </>
  );
};

export default SidebarItem;
