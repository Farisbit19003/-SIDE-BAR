import { motion } from 'framer-motion';
import logo from "../../assets/logo.svg";
import AuthorizedMenu from "./authorizedMenu";
import { AlignLeftOutlined } from '@ant-design/icons';

const Navbar = ({setOpen}) => {
const toggleSidebar=()=>{
setOpen(true);
}
  return (
    <header className="fixed z-40 w-full bg-white shadow">
      <nav className="flex items-center justify-between px-5 py-4 md:px-8">
        {/* <!-- Mobile menu button --> */}
        <motion.button
          whileTap={{ scale: 0.88 }}
          onClick={toggleSidebar}
          className="flex h-full items-center justify-center p-2 focus:text-accent focus:outline-none lg:hidden"
        >
       <AlignLeftOutlined />
        </motion.button>

        <div className="ms-5 me-auto hidden md:flex">
          <img src={logo} alt="logo" className="object-cover" />
        </div>

        <div className="space-s-8 flex items-center">
          <button
              className="ms-4 md:ms-6 mx-auto
              px-3 py-0  text-sm h-10 bg-[#248F59] font-sans
                text-light border border-transparent hover:bg-accent-hover
               inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow
               "
          >
            Create Shop
          </button>

         <AuthorizedMenu/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
