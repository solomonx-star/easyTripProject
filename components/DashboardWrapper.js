import React from "react";
import SideBar from "../app/admin/sidebar";

function DashBoardWrapper({ children }) {
  return (
    <main>
      <div className="flex">
        <SideBar />
        {children}
      </div>
    </main>
  );
}

export default DashBoardWrapper;
