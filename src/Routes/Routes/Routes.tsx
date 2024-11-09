import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Login/Signup";
import SubMenuOne from "../../Pages/Shared/mobileMenu/SubMenu/SubMenuOne";
import PageNotFound from "../../Pages/Shared/PageNotFound/PageNotFound";
import Dashboard from "../../Layout/Dashboard";
import EditProfile from "../../Pages/Dashboard/EditProfile.tsx/EditProfile";
import Invoice from "../../Pages/Dashboard/Invoice/Invoice";
import CloseAccount from "../../Pages/Dashboard/CloseAccount/CloseAccount";
import Messages from "../../Pages/Dashboard/Messages/Messages";
import BookMarked from "../../Pages/Dashboard/BookMarked/BookMarked";
import PostAnAd from "../../Pages/Dashboard/PostAnAd/PostAnAd";
import FavouriteAds from "../../Pages/Dashboard/FavouriteAds/FavouriteAds";
import MyAds from "../../Pages/Dashboard/MyAds/MyAds";
import UserDashboard from "../../Pages/Dashboard/UserDashboard/UserDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/target",
        element: <SubMenuOne></SubMenuOne>,
      },
      {
        path: "*",
        element: <PageNotFound></PageNotFound>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "user",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "edit-profile",
        element: <EditProfile></EditProfile>,
      },
      {
        path: "my-ads",
        element: <MyAds></MyAds>,
      },
      {
        path: "favourite-ads",
        element: <FavouriteAds></FavouriteAds>,
      },
      {
        path: "Post-an-ad",
        element: <PostAnAd></PostAnAd>,
      },
      {
        path: "bookmarked",
        element: <BookMarked></BookMarked>,
      },
      {
        path: "message",
        element: <Messages></Messages>,
      },
      {
        path: "close-account",
        element: <CloseAccount></CloseAccount>,
      },
      {
        path: "invoice",
        element: <Invoice></Invoice>,
      },
    ],
  },
]);
export default router;
