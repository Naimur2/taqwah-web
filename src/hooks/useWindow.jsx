import React, { useEffect } from "react";

const screenSizes = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
};

export default function useWindow() {
    const [windowSize, setWindowSize] = React.useState(0);

    useEffect(() => {
        if (window) {
            setWindowSize(window.innerWidth);

            const handleResize = () => {
                setWindowSize(window.innerWidth);
            };

            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    const isGreaterThan = (size) => windowSize > screenSizes[size];

    const isLessThan = (size) => windowSize < screenSizes[size];

    const isBetween = (min, max) =>
        windowSize > screenSizes[min] && windowSize < screenSizes[max];

    const isBetweenOrEqual = (min, max) =>
        windowSize >= screenSizes[min] && windowSize <= screenSizes[max];

    const isGreaterThanEqual = (size) => windowSize >= screenSizes[size];

    const isLessThanEqual = (size) => windowSize <= screenSizes[size];

    const isEqual = (size) => windowSize === screenSizes[size];

    return {
        windowSize,
        isGreaterThan,
        isLessThan,
        isBetween,
        isBetweenOrEqual,
        isGreaterThanEqual,
        isLessThanEqual,
        isEqual,
    };
}
