import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Layout = ({ children }) => {
    let history = useHistory()
    useEffect(() => {
        console.log(123456, localStorage.getItem("islogin"));
        if (localStorage.getItem("islogin") !== 'true') {
            history.push("/");
        }
    }, [])
    return (
        <>
            {children}
        </>
    )
}

export default Layout
