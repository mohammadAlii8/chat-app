import React from 'react';
import google from "../assets/icons8-google.svg"
import styles from "./Login.module.css"
const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Welcome to GalaxyGram</h2>
                <div className={styles.button}>
                    <img src={google} alt="google" />Sign in with Google
                </div>
            </div>
        </div>
    );
};

export default Login;