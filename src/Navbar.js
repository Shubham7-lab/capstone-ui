import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/account">Account</Link>
            <Link to="/fundtransfer">FundTransfer</Link>
            <Link to="/ministatement">MiniStateMent</Link>
            <Link to="/logout">Logout</Link>
        </div>
    )
}

export default Navbar
