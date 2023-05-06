import React from "react";
import { HeaderNav } from "../organisms/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderNav />
      {children}
    </>
  );
};

export default Layout;
