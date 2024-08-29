import React from "react";
import Sidebar from "./sidebar";

const Navigation = () => {
  return (
    <>
      <nav className="p-5 border-b border-muted">
        <div className="flex items-center justify-between">
          <span className="text-primary font-bold">Don Juan!</span>
        </div>
      </nav>

      <Sidebar />
    </>
  );
};

export default Navigation;
