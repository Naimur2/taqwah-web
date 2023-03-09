import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";

export default function NavBrand() {
    return (
        <NavLink to="/" className={classes["logo"]}>
            taqwah
        </NavLink>
    );
}
