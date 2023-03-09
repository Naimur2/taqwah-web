import React from "react";

export default function HeaderSocialLink({
    link = "https://www.figma.com/@taqwah_digital",
    iconPath = "/images/figma.svg",
    iconAlt = "social link",
    style = {},
    background = "#ffffff",
    imageClass = "",
    imageStyle = {},
    className = "",
}) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={`h-[2.5rem] w-[2.5rem] xl:h-[3rem] xl:w-[3rem] bg-white flex justify-center items-center shadow-lg__left ${className}`}
            style={{ background, ...style }}
        >
            <img
                className={`h-[0.9rem] w-[0.9rem] xl:h-[1.2rem] xl:w-[1.2rem] ${imageClass}`}
                style={imageStyle}
                src={iconPath}
                alt={iconAlt}
            />
        </a>
    );
}
