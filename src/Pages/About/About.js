import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const About = () => {
    const { user, loading } = useContext(AuthContext);
    console.log(user);
   

    if(loading){
        return <button className="btn btn-square loading"></button>
    } 

    const { email } = user;


    return (
        <div className="card w-1/4 mx-auto bg-base-100 shadow-xl">
            <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://placeimg.com/192/192/people" />
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{email}</h2>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Edit Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;