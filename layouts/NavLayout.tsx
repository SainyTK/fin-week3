import React from "react";
import Topbar from "../components/Topbar";

const NavLayout: React.FC<React.HTMLProps<HTMLElement>> = (props) => {
  return (
    <div>
      <Topbar />
      {props.children}
    </div>
  );
};

export default NavLayout;
