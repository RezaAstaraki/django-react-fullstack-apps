import React from "react";
import { Outlet } from "react-router-dom";

function BaseLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default BaseLayout;
