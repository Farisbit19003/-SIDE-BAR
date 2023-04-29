import React, { Children, useState } from "react";
import { Fragment } from "react";
import logo from "../../../assets/Logo.svg";
import SidebarItem from "../../Navbar/sitebar-items";
import Navbar from "../../Navbar";
import { Drawer } from "antd";
import { siteSettings } from "../../SiteSettings/site.settings";
const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  // initialize with the first item's id
  const onClose = () => {
    setOpen(false);
  };

  const SidebarItemMap = () => (
    <Fragment>
      {siteSettings.sidebarLinks.admin.map((s) => (
        <SidebarItem
          key={s.id}
          label={s.label}
          icon={s.icon}
          to={s.to}
        />
      ))}
    </Fragment>
  );
  return (
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
        <aside className="xl:w-76 ltr:left-0
         ltr:right-auto rtl:right-0 rtl:left-auto fixed bottom-0 hidden
          h-full w-72 overflow-y-auto bg-white px-4 pt-20 shadow lg:block">
          <div className="flex flex-col space-y-2 py-3">
            <SidebarItemMap />
          </div>
        </aside>
        <main className="lg:pl-72 lg:pr-0 xl:pl-76 xl:pr-76 w-full">
          <div className="h-full p-5 md:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
export default AdminLayout;
