import React from "react";
import storageHelper from "../helpers/storageHelper"
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        storageHelper.deleteItem("Token")
        navigate("/")
    }
    
    return (
        <button className="btn btn-danger mx-2" onClick={handleLogout}>
            Logout
        </button>
    )
}

export default Logout