import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const AuthorizedMenu = () => {
  return (
    <Menu as="div" className="relative inline-block text-left ml-5">
      <Menu.Button className="flex items-center focus:outline-none">
        <Space wrap size={20}>
          <Avatar icon={<UserOutlined />} />
        </Space>
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
             bg-[#248F59] px-4 py-3 text-sm text-[#FFFFFF]"
            >
              <span className="font-semibold capitalize">kamran</span>
              <span className="text-xs">Kamran@gmail.com</span>
            </li>
          </Menu.Item>

          <Menu.Item>
            <li className="cursor-pointer border-b border-gray-100 last:border-0">
              <div className="block px-4 py-3 text-sm font-semibold capitalize transition duration-200 hover:text-accent"
                >
                <Link to="/profile-update">Profile</Link>
                </div>
            </li>
          </Menu.Item>
          <Menu.Item>
            <li className="cursor-pointer border-b border-gray-100 last:border-0">
              <a
                className={
                  "block px-4 py-3 text-sm font-semibold capitalize transition duration-200 hover:text-accent"
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
