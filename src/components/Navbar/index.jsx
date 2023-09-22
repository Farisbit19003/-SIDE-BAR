import { AiOutlineMenuUnfold } from "react-icons/ai";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AuthorizedMenu from "./authorizedMenu";

const Navbar = ({ setOpen }) => {
  const { loggedIn, siteSetting } = useSelector((state) => ({ ...state }));
  const role = loggedIn && loggedIn.user && loggedIn.user.role;
  const toggleSidebar = () => {
    setOpen(true);
  };

  return (
    <>
      <header className="fixed z-40 w-full bg-white shadow-sm">
        <nav className="flex items-center justify-between px-5 py-4 md:px-8">
          {/*  Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={toggleSidebar}
            className="flex h-full items-center justify-center lg:hidden"
          >
            <AiOutlineMenuUnfold color="#248f59" size={30} />
          </motion.button>

          <div className="ms-5 me-auto hidden md:flex">
            <a href="https://bazakr-pk-frontend.vercel.app/">
              <img
                src={
                  siteSetting?.image?.url
                    ? siteSetting.image.url
                    : "http://res.cloudinary.com/die5mkbau/image/upload/v1683410253/zusdxoommia3lwtkzzk4.svg"
                }
                alt="logo"
                className="object-cover h-8"
              />
            </a>
          </div>

          <div className="space-s-8 flex items-center">
            {role === "Seller" ? (
              <button className="ms-4 md:ms-6 mx-auto px-3 py-0 uppercase text-sm h-9 bg-[#248F59] font-sans text-[#f2f2f2]  hover:text-white inline-flex items-center transition-transform hover:scale-95 justify-center flex-shrink-0 font-medium rounded-md">
                <Link to="/my-shop/create">Create Shop</Link>
              </button>
            ) : (
              ""
            )}
            <AuthorizedMenu />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
