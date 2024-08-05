import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Contest from "./Contest";
import Acceptance from "./Acceptance";
import Top from "./Top";
import Achievements from "./Achievements";
import Submissions from "./Submissions";

function Dashboard() {
  return (
    <div>
      <div className="">
        <Navbar />
        <div className="text-zinc-400 flex">
          <Profile />
          <div className="">
            <div className="flex">
              <Contest />
              <Top />
            </div>
            <div className="flex gap-1">
              <Acceptance />
              <Achievements />
            </div>
            <Submissions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
