import React from 'react';
import google from "../assets/icons8-google.svg"

const Login = () => {
    return (
        <div>
            <div>
                <h2>Welcome to GalaxyGram</h2>
                <div>
                    <img src={google} alt="google" />Sign in with Google
                </div>
            </div>
        </div>
    );
};

export default Login;