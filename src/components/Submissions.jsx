import React from "react";
import { PiWarningCircleLight } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import subm from "./submission.png";

function Submissions() {
  return (
    <div className="mt-4 bgCards mr-9 p-4 rounded-lg ">
      <div className=" flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-zinc-100 font-semibold text-lg">1,295</span>{" "}
          &nbsp;&nbsp;
          <span className="text-zinc-300 text-sm">
            submissions in the past one year
          </span>
          <span>
            <PiWarningCircleLight />
          </span>
        </div>
        <div className="text-xs flex items-center">
          <span>Total active days: 134</span>&nbsp; &nbsp; &nbsp; &nbsp;
          <span>Max streak: 26</span>&nbsp; &nbsp; &nbsp; &nbsp;
          <button className="bg-zinc-700 px-4 py-1 rounded-md flex text-zinc-300 hover:bg-zinc-600 items-center">
            <p>Current</p>
            <RiArrowDropDownLine />
          </button>
        </div>
      </div>
      <img src={subm} alt="" />
    </div>
  );
}

export default Submissions;
