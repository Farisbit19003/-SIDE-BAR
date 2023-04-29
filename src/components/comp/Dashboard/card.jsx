import React from "react";
import StickerCard from "./StickerCards";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiCartDownload } from "react-icons/bi";
import { TfiMoney } from "react-icons/tfi";
import { BsShop } from "react-icons/bs";
const Card = () => {
  return (
    <div className="mb-6 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      <div className="w-full ">
        <StickerCard
          titleTransKey="Total Revenue"
          subtitleTransKey="(Last 30 Days)"
          icon={<TfiMoney size={30} className=" align-middle text-[#047857]"  />}
          iconBgStyle={{ backgroundColor: "#A7F3D0" }}
          price={787}
        />
      </div>
      <div className="w-full ">
        <StickerCard
          titleTransKey="Total Order"
          subtitleTransKey="(Last 30 Days)"
          icon={<BiCartDownload size={30} className=" align-middle text-[#ff6e6e]"  />}
          iconBgStyle={{ backgroundColor: "#facaca" }}
          price={767}
        />
      </div>
      <div className="w-full ">
        <StickerCard
          titleTransKey="Today Revenue"
          icon={<AiOutlineDollarCircle size={35} className=" align-middle text-[#ffb300]" />}
          iconBgStyle={{ backgroundColor: "#ffe8b2" }}
          price={878}
        />
      </div>
      <div className="w-full ">
        <StickerCard
          titleTransKey="Total Shops"
          icon={<BsShop size={25} className=" align-middle text-[#1D4ED8]" />}
          iconBgStyle={{ backgroundColor: "#93C5FD" }}
          price={0}
        />
      </div>
    </div>
  );
};
export default Card;
