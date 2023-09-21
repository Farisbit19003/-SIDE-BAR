import React from "react";
import { useSelector } from "react-redux";
const Logo = () => {
  const { siteSetting } = useSelector((state) => ({ ...state }));
  return (
    <>
      <img
        src={
          siteSetting
            ? siteSetting?.image?.url
            : "http://res.cloudinary.com/die5mkbau/image/upload/v1683987393/oglkzw11zgjay4qbm2t9.svg"
        }
        className="h-10"
        alt="logo"
      />
    </>
  );
};

export default Logo;
