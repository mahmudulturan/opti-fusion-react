import { createBrowserRouter } from "react-router-dom";
import RootElement from "../Pages/RootElement";

const Router = new createBrowserRouter([
    { 
        path:'/',
        element: <RootElement></RootElement>
    }
])
export default Router;