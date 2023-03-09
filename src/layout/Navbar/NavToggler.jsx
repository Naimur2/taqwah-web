import React from "react";
import classes from "./Navbar.module.scss";
export default function NavToggler({ onClick }) {
    return (
        <div onClick={onClick} className={classes["togglebar"]}>
            <svg
                width="24"
                height="11"
                viewBox="0 0 24 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M24 1.94824C23.7411 1.94824 7.89212 1.94824 0 1.94824"
                    stroke="#070038"
                    strokeWidth="2"
                />
                <path
                    d="M24 9.94824C23.7411 9.94824 7.89212 9.94824 0 9.94824"
                    stroke="#070038"
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
}
