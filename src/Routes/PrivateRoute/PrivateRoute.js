import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';



const PrivateRoute = ({children}) => {   
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(loading);

    if(loading){
        return <button className="btn btn-square loading"></button>
    }   

    if(user){       
        return children;   
    }
    return <Navigate to= "/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;