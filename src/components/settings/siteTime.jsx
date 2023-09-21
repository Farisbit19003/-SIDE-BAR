import React from "react";

const SiteTime = () => {
    return (
        <>
        <div className="flex flex-col gap-2 h-fit w-full">
            <h4 className="font-sans font-semibold  uppercase mt-1">Timings</h4>
            <div>
                <input type="radio" />
                <span className="font-sans"> Always Open</span>
            </div>
            <div>
                <input type="radio" />
                <span className="font-sans"> Opens during selected hours</span>
            </div>
            <div className="flex flex-col">
            <label className="font-sans font-semibold  uppercase mt-1">Opening</label>
            <input
                type="time"
                className="h-12 my-2 w-[13rem] px-5 border rounded-lg border-neutral-300"
            />

            <label className="font-sans font-semibold  uppercase mt-1">Closing</label>
            <input
                type="Time"
                placeholder="Closing"
                className="h-12 my-2 w-[13rem] px-5 border rounded-lg border-neutral-300"
            />
            </div>
          </div>
        </>
    )
}

export default SiteTime