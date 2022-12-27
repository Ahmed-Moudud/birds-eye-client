import { createBrowserRouter } from "react-router-dom";

import Main from "../../Layout/Main";
import SignUp from "../../Pages/SignUp/SignUp";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
         
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;