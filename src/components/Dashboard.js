import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact"
import Logout from "./Logout"
import Users from "./User/Users"
import PrivateRoutes from "./PrivateRoutes"

const Dashboard = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">CRM</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Users">Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            <Logout />
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container my-4">
                <Routes element={<PrivateRoutes />}>
                    <Route exact path="/Contact" element={<Contact />}></Route>
                    <Route exact path="/Users" element={<Users />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default Dashboard