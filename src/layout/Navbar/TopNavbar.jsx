import React, { useState } from "react";
import classes from "./Navbar.module.scss";

import NavBrand from "./NavBrand";
import NavItem from "./NavItem";
import NavToggler from "./NavToggler";

const links = [
    {
        id: 1,
        href: "#service",
        svgClassName: "homeSvg",
        label: "Services",
    },
    {
        id: 2,
        href: "#projects",
        svgClassName: "svg_size1",
        label: "Projects",
    },
];

/* 
          <li>
            <Link
              smooth
              spy
              to="service"
              activeClass="active-link"
              className="links"
            >
              <NavHashLink smooth to="/home#service">
                Service
                <svg
                  className="button_stroke svg_size2"
                  viewBox="0 0 91 35"
                  fill="none"
                >
                  <path
                    id="line"
                    d="M58.4965 7.40663C52.2464 4.17235 1.55113 3.55591 1.55127 19.268C1.55141 34.7487 39.7159 33.8546 50.0244 33.8546C60.3021 33.8546 90.0248 33.4446 90.0248 21.9977C90.0248 9.43264 63.9134 -0.387302 45.4409 1.72749"
                    stroke="#070038"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </NavHashLink>
            </Link>
          </li>
          <li>
            <Link
              smooth
              spy
              to="process"
              activeClass="active-link"
              className="links"
            >
              <NavHashLink smooth to="/home#process">
                Process
                <svg
                  className="button_stroke svg_size2"
                  viewBox="0 0 91 35"
                  fill="none"
                >
                  <path
                    id="line"
                    d="M58.4965 7.40663C52.2464 4.17235 1.55113 3.55591 1.55127 19.268C1.55141 34.7487 39.7159 33.8546 50.0244 33.8546C60.3021 33.8546 90.0248 33.4446 90.0248 21.9977C90.0248 9.43264 63.9134 -0.387302 45.4409 1.72749"
                    stroke="#070038"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </NavHashLink>
            </Link>
          </li>
          <li>
            <Link
              smooth
              spy
              to="our_client"
              activeClass="active-link"
              className="links"
            >
              <NavHashLink smooth to="/home#our_client">
                Client's Love
                <svg
                  className="button_stroke svg_size3"
                  viewBox="0 0 91 35"
                  fill="none"
                >
                  <path
                    id="line"
                    d="M58.4965 7.40663C52.2464 4.17235 1.55113 3.55591 1.55127 19.268C1.55141 34.7487 39.7159 33.8546 50.0244 33.8546C60.3021 33.8546 90.0248 33.4446 90.0248 21.9977C90.0248 9.43264 63.9134 -0.387302 45.4409 1.72749"
                    stroke="#070038"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </NavHashLink>
            </Link>
          </li>
          <li>
            <Link
              smooth
              spy
              to="know_more"
              activeClass="active-link"
              className="links"
            >
              <NavHashLink smooth to="/home#know_more">
                Know more
                <svg
                  className="button_stroke svg_size4"
                  viewBox="0 0 91 35"
                  fill="none"
                >
                  <path
                    id="line"
                    d="M58.4965 7.40663C52.2464 4.17235 1.55113 3.55591 1.55127 19.268C1.55141 34.7487 39.7159 33.8546 50.0244 33.8546C60.3021 33.8546 90.0248 33.4446 90.0248 21.9977C90.0248 9.43264 63.9134 -0.387302 45.4409 1.72749"
                    stroke="#070038"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </NavHashLink>
            </Link>
          </li>
*/

const TopNavbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <header className={classes["home_nav"]}>
            <NavBrand />
            <NavToggler onClick={() => setToggleMenu((prev) => !prev)} />
            <nav id={toggleMenu ? classes["hidden"] : ""}>
                <ul>
                    {links.map((link) => (
                        <NavItem
                            key={link.id}
                            href="/"
                            svgClassName={classes[link.svgClassName]}
                        >
                            {link.label}
                        </NavItem>
                    ))}
                </ul>
                <button className="shadow-lg__left">Contact Us</button>
            </nav>
        </header>
    );
};

export default TopNavbar;
