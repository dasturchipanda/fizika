import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

const AdminLayout = () => {
  return (
    <div>
      {/* Admin panelning umumiy qismi (nav, sidebar, va h.k.) */}
      <Sidebar/>
      {/* Ichki sahifalarni shu yerda ko‘rsatadi */}
      <Outlet />
    </div>
  );
};

export default AdminLayout;
