import React, { useContext, useState ,useEffect} from "react";
import { Fragment } from "react";
import logo from "../../../assets/Logo.svg";
import SidebarItem from "../../Navbar/sitebar-items";
import Navbar from "../../Navbar";
import { Drawer } from "antd";
import { siteSettings } from "../../SiteSettings/site.settings";
import { UserContext } from "../../../context/index";
import { Link ,useNavigate} from "react-router-dom";
import {toast} from "react-toastify"
import {AiOutlineLoading3Quarters} from "react-icons/ai"
const ShopLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useContext(UserContext);;
  const role=state&&state.user&&state.user.role;
  const navigate = useNavigate()
  // initialize with the first item's id
  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    // Redirect to login if state is null
    if (!state) {
      setTimeout(()=>{
        navigate("/login");
        },3000)
    }
    // Redirect to AccessDenied if user is not admin
    else if (state.user && state.user.role && state.user.role!== 'Seller') {
      setTimeout(()=>{
        navigate("/AccessDenied");
        },3000)
    }
  }, [state]);
  
  const SidebarItemMap = () => (
    <Fragment>
      {siteSettings.sidebarLinks.shop.map((s) => (
        <SidebarItem
          key={s.id}
          label={s.label}
          icon={s.icon}
          to={s.to}
        />
      ))}
    </Fragment>
  );
  return !state||!state.token||role!=="Seller"?(
    <div className="fixed inset-0 flex items-center justify-center">
  <div className="flex flex-col items-center">
    <AiOutlineLoading3Quarters className="text-6xl w-16 h-16 text-[#248F59] animate-spin" />
    <span className="mt-4 text-gray-500 text-lg font-semibold">Loading...</span>
    <span className="mt-4 text-gray-500 text-lg font-semibold">You are not Authenticated</span>
  </div>
</div>
  ) 
  :(
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
  )

};
export default ShopLayout;
