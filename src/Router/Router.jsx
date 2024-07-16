import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import UserDashboard from "../Dashboard/UserDashboard";
import SendMoney from "../Pages/SendMoney";
import CashOut from "../Pages/CashOut";
import CashIn from "../Pages/CashIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/user-dashboard",
                element: <UserDashboard/>
            },
            {
                path: "/send-money",
                element: <SendMoney/>
            },
            {
                path: "/cash-out",
                element: <CashOut/>
            },
            {
                path: "/cash-in",
                element: <CashIn/>
            }
        ]
    },
]);

export default router;