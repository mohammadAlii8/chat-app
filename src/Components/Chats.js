import React, { useState, useContext, useEffect } from 'react';
import styles from "./Chats.module.css"
import Navbar from './Navbar';
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom"
import { ChatEngine } from 'react-chat-engine';
import { AuthContext } from '../Context/AuthContextProvider';
import axios from 'axios';

const Chats = () => {
    const [loading, setLoading] = useState(true);
    const user = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            navigate("/")
            return;
        }
        axios.get("https://api.chatengine.io/users/me", {
            headers: {
                "project-id": "9545ba2b-a8c6-444d-86b3-c57ad262b42a",
                "username": user.email,
                "user-secret": user.uid
            }
        })
            .then(() => {
                setLoading(false)
            })
            .catch(() => {
                let formData = new FormData();
                formData.append("email", user.email)
                formData.append("username", user.email)
                formData.append("secret", user.uid)
                getFile(user.photoURL)
                    .then(avatar => {
                        formData.append("avatar", avatar, avatar.name)
                        axios.post("https://api.chatengine.io/users/", formData, {
                            headers: {
                                "private-key": "a0ab9f27-544e-4545-ac6a-f9ca31ddae8c"
                            }
                        }).then(() => setLoading(false))
                            .catch((error) => console.log(error))

                    })
            })
    }, [user, navigate])

    const getFile = async (url) => {
        const response = await fetch(url)
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", { type: "image/jpeg" })
    }
    const logOutHandler = async () => {
        await auth.signOut();
        navigate("/")
    }
    if (!user || loading) return "Loading..."
    return (
        <div className={styles.container}>
            <Navbar logOutHandler={logOutHandler} />
            <ChatEngine
                height="calc(100vh - 50px)"
                projectID="9545ba2b-a8c6-444d-86b3-c57ad262b42a"
                userName={user.email}
                userSecret={user.id}
            />
        </div>
    );
};

export default Chats;