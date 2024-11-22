import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const layout: React.FC<LayoutProps> = ({ children }) => {
  return <main className="admin">{children}</main>;
};

export default layout;
