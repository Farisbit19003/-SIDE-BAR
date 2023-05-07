import { Drawer } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/Logo.svg";
import Navbar from "../../Navbar";
import SidebarItem from "../../Navbar/sitebar-items";
import { siteSettings } from "../../SiteSettings/site.settings";
const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { loggedIn } = useSelector((state) => ({ ...state }));

  const navigate = useNavigate();
  const role = loggedIn && loggedIn.user && loggedIn.user.role;
  // initialize with the first item's id
  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    // Redirect to login if state is null
    if (!loggedIn||!loggedIn.token) {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
    // Redirect to AccessDenied if user is not admin
    else if (
      loggedIn.user &&
      loggedIn.user.role &&
      loggedIn.user.role !== "Admin"
    ) {
      setTimeout(() => {
        navigate("/AccessDenied");
      }, 3000);
    }
  }, [loggedIn]);

  const SidebarItemMap = () => (
    <Fragment>
      {siteSettings.sidebarLinks.admin.map((s) => (
        <SidebarItem key={s.id} label={s.label} icon={s.icon} to={s.to} />
      ))}
    </Fragment>
  );
  return !loggedIn || !loggedIn.token || role !== "Admin" ? (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <AiOutlineLoading3Quarters className="text-6xl w-16 h-16 text-[#248F59] animate-spin" />
        <span className="mt-4 text-gray-500 text-lg font-semibold">
          Loading...
        </span>
        <span className="mt-4 text-gray-500 text-lg font-semibold">
          You are not Authenticated
        </span>
      </div>
    </div>
  ) : (
    <div className="flex min-h-screen flex-col bg-gray-100 transition-colors duration-150">
      <Navbar setOpen={setOpen} />
      <Drawer
        title={<img src={logo} alt="logo" className="object-cover" />}
        placement="left"
        onClose={onClose}
        open={open}
      >
        <SidebarItemMap />
      </Drawer>

      <div className="flex flex-1   pt-20">
        <aside
          className="xl:w-76 ltr:left-0
         ltr:right-auto rtl:right-0 rtl:left-auto fixed bottom-0 hidden
          h-full w-72 overflow-y-auto bg-white px-4 pt-20 shadow lg:block"
        >
          <div className="flex flex-col space-y-2 py-3">
            <SidebarItemMap />
          </div>
        </aside>
        <main className="lg:pl-72 lg:pr-0 xl:pl-76 xl:pr-76 w-full">
          <div className="h-full p-5 md:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
};
export default AdminLayout;
