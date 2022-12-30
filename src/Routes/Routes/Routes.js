import { createBrowserRouter } from "react-router-dom";

import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Media from "../../Pages/Media/Media";
import PostDetail from "../../Pages/PostDetail/PostDetail";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
         
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/media',
                element: <Media></Media>
            },
            {
                path: '/posts/:id',
                element: <PrivateRoute><PostDetail></PostDetail></PrivateRoute> ,
                loader: ({params})=> fetch(`https://birdseye-server.vercel.app/posts/${params.id}`)
            }
            
          
           
        ]
    }
])

export default router;