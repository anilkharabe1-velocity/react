import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/useSlice";

const Login = () => {
  const isLogin = useSelector((store) => store.user.isLogin);

  const dispatch = useDispatch();

  const handleLogin = () => {
    // flag => off => on
    if (isLogin) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  };

  return (
    <div>
      <h1>Login Page</h1>

      {isLogin ? (
        <button
          className="border-1 ml-2.5 px-1.5 rounded-sm bg-amber-100 cursor-pointer"
          onClick={handleLogin}
        >
          Logout
        </button>
      ) : (
        <button
          className="border-1 ml-2.5 px-1.5 rounded-sm bg-amber-100 cursor-pointer"
          onClick={handleLogin}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Login;
