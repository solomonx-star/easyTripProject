import React from "react";
import SideBar from "../app/admin/sidebar";

function UsersWrapper({ children }) {
  return (
      <div className="flex">
        <SideBar />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
  );
}

export default UsersWrapper;
