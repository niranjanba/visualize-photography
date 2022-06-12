import React, { useState } from "react";
import { NavLink, useMatch } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth } from "../context/AuthContext";

function Navbar() {
    const [showSocialMedia, setShowSocialMedia] = useState(true);
    const { logOut, currentUser } = useAuth();

    const isAdminPage = useMatch("/admin");

    const active = {
        borderRadius: "3px",
        border: "1.5px solid white",
        padding: "2px 3px",
    };

    const inActive = {
        border: "1.5px solid transparent",
        padding: "2px 3px",
        color: "white",
    };

    const toggleShowSocialMedia = () => {
        setShowSocialMedia(!showSocialMedia);
    };

    return (
        <nav className="main-nav">
            <div className="logo">
                <span>V</span>isualize
                <span>P</span>hotography
            </div>
            <div
                className={
                    showSocialMedia ? "menu-link" : "menu-link mobile-menu-link"
                }
            >
                <ul>
                    <li onClick={toggleShowSocialMedia}>
                        <NavLink
                            to={"/"}
                            style={({ isActive }) =>
                                isActive ? active : inActive
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li onClick={toggleShowSocialMedia}>
                        <NavLink
                            to={"/gallery"}
                            style={({ isActive }) =>
                                isActive ? active : inActive
                            }
                        >
                            Gallery
                        </NavLink>
                    </li>
                    <li onClick={toggleShowSocialMedia}>
                        <NavLink
                            to={"/contact"}
                            style={({ isActive }) =>
                                isActive ? active : inActive
                            }
                        >
                            Contact
                        </NavLink>
                    </li>

                    {currentUser && !isAdminPage && (
                        <li onClick={toggleShowSocialMedia}>
                            <NavLink
                                to={"/admin"}
                                style={({ isActive }) =>
                                    isActive ? active : inActive
                                }
                            >
                                Admin
                            </NavLink>
                        </li>
                    )}

                    {currentUser && (
                        <li onClick={toggleShowSocialMedia}>
                            <NavLink onClick={logOut} to={"/"}>
                                Signout
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
            <div className="social-media">
                <ul>
                    <li>
                        <a href="https://facebook.com">
                            <AiFillFacebook className="facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com">
                            <AiFillInstagram className="instagram" />
                        </a>
                    </li>
                </ul>
                <div
                    className="hamburger-menu"
                    onClick={() => setShowSocialMedia(!showSocialMedia)}
                >
                    <GiHamburgerMenu />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
