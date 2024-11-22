import MobileNav from "@/components/shared/mobileNav";
import Sidebar from "@/components/shared/sidebar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default layout;
