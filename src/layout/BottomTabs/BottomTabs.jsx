import React from "react";
import classes from "./BottomTabs.module.scss";

const tabs = [
    {
        id: 1,
        name: "Services",
        icon: "/svgs/services.svg",
        link: "/#services",
    },
    {
        id: 2,
        name: "Client’s Love",
        icon: "/svgs/clients-love.svg",
        link: "/#services",
    },
    {
        id: 3,
        name: "Pricing",
        icon: "/svgs/pricing.svg",
        link: "/#services",
    },
    {
        id: 4,
        name: "Process",
        icon: "/svgs/process.svg",
        link: "/#services",
    },
    {
        id: 5,
        name: "Faq",
        icon: "/svgs/services.svg",
        link: "/#services",
    },
];

export default function BottomTabs() {
    return (
        <div className={`${classes.botomTab}`}>
            {tabs.map((tab) => (
                <div className={`${classes.botomTabItem}`} key={tab.id}>
                    <img src={tab.icon} alt={tab.name} />
                    <p>{tab.name}</p>
                </div>
            ))}
        </div>
    );
}
