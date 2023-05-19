import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/Bookings/Bookings";
import Bookinks from "../pages/Bookings/Bookings";
import BookingService from "../pages/BookingService/BookingService";
import PrivateRoute from "./PrivateRoute";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'bookings',
                element: <PrivateRoute><BookingService></BookingService></PrivateRoute>
            },
            {
                path: 'checkout/:id',
                element: <Bookinks></Bookinks>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }

        ]
    },
]);


export default router;