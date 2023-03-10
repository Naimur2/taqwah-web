import React from "react";

export default function PriceCard({ title, price, category, features }) {
    return (
        <div
            className="transition-all duration-100 ease-in-out
border-[#070038] border-2 border-solid bg-[#4878F4] hover:bg-white
px-6 py-10  flex flex-col justify-between items-center gap-4 xl:gap-6 max-w-[21rem] xl:max-w-[30rem] w-full h-full feature-card
"
        >
            <div className="grid place-items-center gap-3 xl:gap-6">
                <button className="btn-bark-blue min-w-[10rem]">{title}</button>
                <h3 className="font-bold text-2xl xl:text-[2.25rem]">
                    {price}
                </h3>
                <p className="font-medium text-md xl:text-lg">{category}</p>
            </div>
            <div className="w-full grid gap-2">
                {features?.map((feature) => (
                    <div
                        className="grid grid-cols-[auto,1fr] items-center"
                        key={feature}
                    >
                        <img
                            src={"/images/tick.svg"}
                            className="w-4 h-4 xl:w-5 xl:h-5 inline-block mr-2"
                            alt="tick"
                        />
                        <span className=" text-base xl:text-xl font-medium">
                            {feature}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
