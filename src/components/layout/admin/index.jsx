import React, { Children, useState } from "react";
import { Fragment } from "react";
import logo from "../../../assets/Logo.svg";
import SidebarItem from "../../Navbar/sitebar-items";
import Navbar from "../../Navbar";
import { Drawer } from "antd";
import { siteSettings } from "../../SiteSettings/site.settings";
const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(
    siteSettings.sidebarLinks.admin[0].id
  );
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
          onClick={() => setSelectedId(s.id)}
        />
      ))}
    </Fragment>
  );
  const SelectedComponent = siteSettings.sidebarLinks.admin.find(
    (s) => s.id === selectedId
  )?.component;
  console.log("ID=>", selectedId);
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

      <div className="flex flex-1 pt-20">
        <aside className="xl:w-76 ltr:left-0 ltr:right-auto rtl:right-0 rtl:left-auto fixed bottom-0 hidden h-full w-72 overflow-y-auto bg-white px-4 pt-28 shadow lg:block">
          <div className="flex flex-col space-y-6 py-3">
            <SidebarItemMap />
          </div>
        </aside>
        <main className="ltr:lg:pl-72 ltr:xl:pl-76 rtl:lg:pr-72 rtl:xl:pr-76 rtl:lg:pl-0 w-full">
          <div className="h-full p-5 md:p-8">
            {" "}
            <SelectedComponent />
          </div>
        </main>
      </div>
    </div>
  );
};
export default AdminLayout;
