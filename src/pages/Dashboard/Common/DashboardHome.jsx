import AdminHome from "../Admin/AdminHome";
import SellerHome from "../Seller/SellerHome";
import UserHome from "../User/UserHome";

const DashboardHome = () => {
    // const [role, isLoading] = useRole()
    // if (isLoading) return <LoadingSpinner />
    const role = "admin"
    return (
      <>
        {role === 'admin' && <AdminHome></AdminHome>}
        {role === 'seller' && <SellerHome></SellerHome>}
        {role === 'user' && <UserHome></UserHome>}
      </>
    );
};

export default DashboardHome;