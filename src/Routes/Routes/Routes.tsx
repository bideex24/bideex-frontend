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
import VerifyEmail from "../../Pages/Login/VerifyEmail";
import EditProfileUser from "../../Pages/Dashboard/EditProfile.tsx/EditProfileUser/EditProfileUser";
import NotificationsUser from "../../Pages/Dashboard/EditProfile.tsx/EditProfileUser/NotificationUser";
import ChoosePlan from "../../Pages/Dashboard/EditProfile.tsx/EditProfileUser/ChoosePlan";
import PasswordAndSecurity from "../../Pages/Dashboard/EditProfile.tsx/EditProfileUser/PasswordAndSecurity";
import PrivateRoute from "./PrivateRoute";
import PostAAD from "../../Pages/PostAAd/PostAAd";
import Sell from "../../Pages/Dashboard/PostAnAd/PostCategory/Sell";
import Service from "../../Pages/Dashboard/PostAnAd/PostCategory/Service";
import Rent from "../../Pages/Dashboard/PostAnAd/PostCategory/Rent";
import Job from "../../Pages/Dashboard/PostAnAd/PostCategory/Job";
import StepOne from "../../Pages/Dashboard/PostAnAd/PostCategory/Step/StepOne";
import StepTwo from "../../Pages/Dashboard/PostAnAd/PostCategory/Step/StepTwo";
import StepThree from "../../Pages/Dashboard/PostAnAd/PostCategory/Step/StepThree";

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
        path: "/post-a-ad",
        element: <PostAAD></PostAAD>,
      },
      {
        path: "*",
        element: <PageNotFound></PageNotFound>,
      },
    ],
  },
  {
    path: "/verifyemail",
    element: (
      <PrivateRoute>
        <VerifyEmail></VerifyEmail>
      </PrivateRoute>
    ),
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "user",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "profile",
        element: <EditProfile></EditProfile>,
        children: [
          {
            path: "edit",
            element: <EditProfileUser></EditProfileUser>,
          },
          {
            path: "notification",
            element: <NotificationsUser></NotificationsUser>,
          },
          {
            path: "choose-plan",
            element: <ChoosePlan></ChoosePlan>,
          },
          {
            path: "password&security",
            element: <PasswordAndSecurity></PasswordAndSecurity>,
          },
        ],
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
        path: "post-an-ad",
        element: <PostAnAd></PostAnAd>,
        children: [
          {
            path: "sell",
            element: <Sell></Sell>,
            children: [
              {
                path: "step1",
                element: <StepOne></StepOne>,
              },
              {
                path: "step2",
                element: <StepTwo></StepTwo>,
              },
              {
                path: "step3",
                element: <StepThree></StepThree>,
              },
            ],
          },
          {
            path: "service",
            element: <Service></Service>,
          },
          {
            path: "rent",
            element: <Rent></Rent>,
          },
          {
            path: "job",
            element: <Job></Job>,
          },
        ],
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
