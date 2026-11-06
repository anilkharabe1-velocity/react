import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const isLogin = useSelector((store) => store.user.isLogin);

  if (!isLogin) {
    // redirecting to login page
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
