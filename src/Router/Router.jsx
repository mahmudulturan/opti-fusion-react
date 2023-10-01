import { createBrowserRouter } from "react-router-dom";
import RootElement from "../Pages/RootElement";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";

const Router = new createBrowserRouter([
    { 
        path:'/',
        element: <RootElement></RootElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    }
])
export default Router;