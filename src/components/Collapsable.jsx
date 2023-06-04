import { AnimatePresence, motion } from "framer-motion";
import { Add, Minus } from "iconsax-react";
import React from "react";
import { useOnClickOutside } from "usehooks-ts";
import { BiChevronRight } from "react-icons/bi";

const CollapsableText = ({ children }) => {
    return (
        <p className="text-[#535052] text-sm xl:text-base !text-left">
            {children}
        </p>
    );
};

export default function Collapsable({
    children,
    isOpen,
    title,
    className = "",
    onToggle,
}) {
    const Icon = isOpen ? Minus : Add;

    const ref = React.useRef(null);

    useOnClickOutside(ref, () => {
        if (isOpen && onToggle) {
            onToggle();
        }
    });

    return (
        <div
            className={`grid gap-4 py-2 border-2 bg-white border-[#070038] border-solid p-4 ${className}`}
            ref={ref}
            data-aos="fade-up"
        >
            <button
                className="flex justify-between items-center text-left w-full py-2 px-2"
                onClick={onToggle}
            >
                <h3 className="text-[#000000] font-bold text-base xl:text-lg">
                    {title}
                </h3>

                <BiChevronRight
                    className={`text-[#070038] text-lg lg:text-xl
                        transition-transform duration-300
                     ${isOpen ? "transform rotate-90" : ""} `}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-[#535052] text-sm xl:text-base pr-8 px-2"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

Collapsable.Text = CollapsableText;
