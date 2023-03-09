import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";

export default function NavItem({ children, svgClassName, href = "/" }) {
    return (
        <li>
            <NavLink
                className={({ isActive }) =>
                    isActive ? classes["active-link"] : ""
                }
                to={href}
            >
                {children}
                <svg
                    className={`${classes["button_stroke"]} ${svgClassName}`}
                    viewBox="0 0 91 35"
                    fill="none"
                >
                    <path
                        id="line"
                        d="M58.4965 7.40663C52.2464 4.17235 1.55113 3.55591 1.55127 19.268C1.55141 34.7487 39.7159 33.8546 50.0244 33.8546C60.3021 33.8546 90.0248 33.4446 90.0248 21.9977C90.0248 9.43264 63.9134 -0.387302 45.4409 1.72749"
                        stroke="#070038"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </NavLink>
        </li>
    );
}
