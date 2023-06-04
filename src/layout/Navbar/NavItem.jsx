import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";

export default function NavItem({ children, svgClassName, href = "#" }) {
    return (
        <li>
            <a
                className={({ isActive }) =>
                    isActive ? classes["active-link"] : ""
                }
                href={href}
            >
                {children}
            </a>
        </li>
    );
}
