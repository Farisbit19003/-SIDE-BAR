import React from "react";

const StickerCard = ({
  titleTransKey,
  subtitleTransKey,
  icon,
  iconBgStyle,
  price,
}) => {
  return (
    <>   
      <div className="flex h-full w-full flex-col border border-[#f2f2f2] rounded bg-white p-7">
        {/* DASHBOARD TOP CARDS STRUCTURE*/}
        <div className="mb-auto flex w-full justify-between pb-8">
          <div className="flex w-full flex-col">
            <span className="mb-1 text-base font-semibold opacity-80 ">
              {titleTransKey}
            </span>
            <span className="text-xs font-semibold ">{subtitleTransKey}</span>
          </div>

          <div
            className="ms-3 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-200"
            style={iconBgStyle}
          >
            {icon}
          </div>
        </div>

        <span className="mb-2 text-xl font-serif ">{price}</span>
      </div>
    </>
  );
};

export default StickerCard;
