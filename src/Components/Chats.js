import React from 'react';
import styles from "./Chats.module.css"
import Navbar from './Navbar';

const Chats = () => {
    return (
        <div className={styles.container}>
            <Navbar />
        </div>
    );
};

export default Chats;