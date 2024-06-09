import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }
])