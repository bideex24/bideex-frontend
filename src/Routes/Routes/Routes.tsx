import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Login/Signup";
import SubMenuOne from "../../Pages/Shared/mobileMenu/SubMenu/SubMenuOne";
import PageNotFound from "../../Pages/Shared/PageNotFound/PageNotFound";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/target',
        element: <SubMenuOne></SubMenuOne>
      },
    ]
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  },
]);
export default router;