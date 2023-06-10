import React, { useEffect } from "react";
import classes from "./BottomTabs.module.scss";
import { useNavigate, useParams, useRoutes } from "react-router-dom";

const tabs = [
    {
        id: 1,
        name: "Services",
        icon: "/svgs/services.svg",
        link: "#services",
    },
    {
        id: 2,
        name: "Client’s Love",
        icon: "/svgs/clients-love.svg",
        link: "#clients-love",
    },
    {
        id: 5,
        name: "Contact Us",
        icon: "/svgs/clients-love.svg",
        link: "#contact-us",
    },
    // {
    //     id: 3,
    //     name: "Pricing",
    //     icon: "/svgs/pricing.svg",
    //     link: "#pricing",
    // },
    // {
    //     id: 4,
    //     name: "Process",
    //     icon: "/svgs/process.svg",
    //     link: "#process",
    // },
    // {
    //     id: 5,
    //     name: "Faq",
    //     icon: "/svgs/services.svg",
    //     link: "#faq",
    // },
];

const Tab = ({ isActive, name, href }) => {
    return (
        <a
            className={`!text-xs text-center text-[#8B9EBA] font-light flex justify-center items-center px-0 ${
                isActive
                    ? "home_btn !min-w-0 w-full !px-2 !py-2 !text-xs shadow-lg__right"
                    : ""
            } !mt-0`}
            href={href}
        >
            <span>{name}</span>
        </a>
    );
};

export default function BottomTabs() {
    const [activeTab, setActiveTab] = React.useState("");

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const currentPath = window.location.hash;
            setActiveTab(currentPath);
        });

        const path = window.location.hash;

        setActiveTab(path);

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    return (
        <div
            className={
                "bg-white fixed bottom-0 left-0 right-0 grid grid-cols-3 gap-2 py-3 px-2 shadow-lg z-50 min-h-[4rem]"
            }
        >
            {tabs.map((tab) => (
                <Tab
                    key={tab.id}
                    {...tab}
                    isActive={activeTab === tab.link}
                    href={tab.link}
                />
            ))}
        </div>
    );
}
