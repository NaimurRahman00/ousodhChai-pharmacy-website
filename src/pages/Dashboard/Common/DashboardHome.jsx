import useRole from "../../../hooks/useRole";
import AdminHome from "../Admin/AdminHome";
import SellerHome from "../Seller/SellerHome";
import UserPaymentHistory from "../User/UserPaymentHistory";

const DashboardHome = () => {
    // const [role, isLoading] = useRole()
    // if (isLoading) return <LoadingSpinner />
    const [role, isLoading] = useRole();
    return (
      <>
        {role === 'admin' && <AdminHome></AdminHome>}
        {role === 'seller' && <SellerHome></SellerHome>}
        {role === 'user' && <UserPaymentHistory></UserPaymentHistory>}
      </>
    );
};

export default DashboardHome;