import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BiUserCircle } from "react-icons/bi";
const AuthorizedMenu = () => {
  const { loggedIn } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const HandleLogout = () => {
    window.localStorage.removeItem("auth");
    dispatch({
      type: "LOGOUT",
      payload: {},
    });
    navigate("/login");
  };
  return (
    <Menu as="div" className="relative inline-block text-left ml-5">
      <Menu.Button className="flex items-center focus:outline-none transition-transform hover:scale-95">
        <BiUserCircle className="text-[#248F59] h-8 w-8" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="ul"
          className="end-0 origin-top-end absolute mt-1 w-48 rounded bg-white shadow-md focus:outline-none"
        >
          <Menu.Item>
            <li
              className="flex w-full flex-col space-y-1 rounded-t
             bg-[#248F59] px-4 py-3 text-sm text-white"
            >
              <span className="font-semibold capitalize">
                {loggedIn && loggedIn.user ? loggedIn.user.name : ""}
              </span>
              <span className="text-xs">
                {loggedIn && loggedIn.user ? loggedIn.user.email : ""}
              </span>
            </li>
          </Menu.Item>

          <Menu.Item>
            <li className="cursor-pointer border-b border-gray-100 last:border-0">
              <div className="block px-4 py-3 text-sm font-semibold capitalize transition duration-200 ">
                <Link to="/profile-update">Profile</Link>
              </div>
            </li>
          </Menu.Item>
          <Menu.Item>
            <li
              onClick={HandleLogout}
              className="cursor-pointer border-b border-gray-100 last:border-0"
            >
              <a
                className={
                  "block px-4 py-3 text-sm font-semibold capitalize transition duration-200 "
                }
              >
                Logout
              </a>
            </li>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default AuthorizedMenu;
