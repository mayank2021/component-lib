import Sidebar from "./Sidebar";
import { Childrenprops } from "../Types/common";

const Layout = ({ children }: Childrenprops) => {
  return (
    <div className="flex h-screen">
      <div className="basis-1/5">
        <Sidebar />
      </div>
      <div className="grow p-6">{children}</div>
    </div>
  );
};

export default Layout;
