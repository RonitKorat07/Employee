import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import Home from "../pages/Home";
import Employee from "../pages/Employee";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([{

    path: '/',
    element: <App/>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/employee',
            element: <Employee/>
        },
        {
            path: '/contact',
            element: <Contact/>
        }
    ]
}])