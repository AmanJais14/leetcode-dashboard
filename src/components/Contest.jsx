import React from "react";
import contest from './contest.png'

function Contest() {
  return (
    <div className="mt-10 bgCards rounded-s-lg p-4">
      <div className="flex items-start gap-3">
        <div>
          <h2 className="text-xs font-semibold">Contest Rating</h2>
          <h1 className="text-2xl font-semibold text-zinc-100">1,513</h1>
        </div>
        <div>
          <h3 className="text-xs">Global Ranking</h3>
          <span className="text-xs font-semibold text-zinc-100">220,587</span><span className="text-xs">/573,899</span>
        </div>
        <div>
          <h3 className="text-sm ">Attended</h3>
          <h2 className="text-xs font-semibold text-zinc-100">2</h2>
        </div>
      </div >
        <img className="max-w-[400px]" src= {contest} alt="" />
        <div className="flex justify-between opacity-10 text-xs">
            <p>Jun 24</p>
            <p>Jun 24</p>
        </div>
    </div>
  );
}

export default Contest;
