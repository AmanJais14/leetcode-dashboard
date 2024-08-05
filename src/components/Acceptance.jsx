import React from "react";
import acceptance from "./Acceptance.png";
import Submissions from "./Submissions";

function Acceptance() {
  const levels = ["Easy", "Med.", "Hard"];
  const counts = ["145/817", "183/1703", "12/726"];
  return (
    <div>
      <div className="mt-4 bgCards rounded-lg p-5">
        <div className="flex gap-20">
          <img className="max-w-[210px] ml-9" src={acceptance} alt="" />
          <div>
            {levels.map((level, ind) => (
              <div className="mt-4 bg-zinc-700 rounded-lg text-xs px-2 mb-[14px] text-center">
                <p className="font-bold">{level}</p>
                <p className="text-xs text-zinc-100">{counts[ind]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Acceptance;
