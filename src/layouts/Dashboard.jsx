// import Container from "../components/Shared/Container";
import { Outlet } from "react-router-dom";
import AdminDashboard from "../pages/Admin Dashboard/AdminDashboard";



const Dashboard = () => {
    return (
        <div>
            {/* Admin dashboard */}
            <AdminDashboard></AdminDashboard>
            {/* Outlet */}
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;