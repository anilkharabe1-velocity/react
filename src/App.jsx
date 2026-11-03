import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={appStore}>
          <Header />
          <Outlet />
        </Provider>
      </QueryClientProvider>
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/res-menu/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default AppRouter;
