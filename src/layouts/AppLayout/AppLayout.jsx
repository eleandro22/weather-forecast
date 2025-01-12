import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app-layout-container">
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
