import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

export const Logout = () => {
    let history = useHistory()
    useEffect(() => {
        localStorage.setItem("islogin", false);
        history.push("/")
    }, [])
    return (
        <div>

        </div>
    )
}
