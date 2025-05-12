import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/UserPage/InitiativeCartPage";
import InitiativeCreatePage from '../pages/UserPage/CreatePage';
import SettingPage from '../pages/UserPage/SettingPage';
import ProfilePage from '../pages/UserPage/ProfilePage';
import AiChatPage from '../pages/UserPage/Ai';
import NewsPage from '../pages/home/News';
import Banner from '../pages/home/Banner';
import About from '../pages/home/About';
import AllInitiativesPage from "../pages/UserPage/AllInitiativesPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Grid from "../pages/home/SmartCityGrid"
// import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks";
// import AddBook from "../pages/dashboard/addBook/AddBook";
// import UpdateBook from "../pages/dashboard/EditBook/UpdateBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/create",
        element: <InitiativeCreatePage />
      },
      {
        path: "/settings",
        element: <SettingPage />
      },
      {
        path: "/profile",
        element: <ProfilePage />
      },
      {
        path: "/aichat",
        element: <AiChatPage />
      },
      {
        path: "/news",
        element: <NewsPage />
      },
      {
        path: "/banner",
        element: <Banner />
      },
      {
        path:'/allInitiatives', 
        element:<AllInitiativesPage/>
      }, 
      {
        path:'/services', 
        element:<Grid/>
      }
    ]
  },
    {
    path: "/admin",
     element: <AdminLogin />
    },
   {
  path: "/dashboard",
    element: <AdminRoute>
      <DashboardLayout />
    </AdminRoute>,
    children: [
      {
        path: "",
         element: <AdminRoute><Dashboard /></AdminRoute>
      },
  //    {
  //       path: "add-new-book",
  //       element: <AdminRoute>
  //         <AddBook />
  //       </AdminRoute>
  //     },
  //     {
  //       path: "edit-book/:id",
  //       element: <AdminRoute>
  //         <UpdateBook />
  //       </AdminRoute>
  //     },
  //     {
  //       path: "manage-books",
  //       element: <AdminRoute>
  //         <ManageBooks />
  //       </AdminRoute>
  //    }
  ]
  }
]);

export default router;