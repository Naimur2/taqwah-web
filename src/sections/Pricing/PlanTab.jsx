import React from "react";

export default function PlanTab({ plans, onSelect, currentPlan }) {
    return (
        <div
            className="border-2 border-[#070038]  border-solid p-2 grid grid-cols-3 max-w-2xl mx-auto"
            data-aos="fade-up"
        >
            {plans?.map((plan) => (
                <button
                    key={plan?.id}
                    onClick={() => onSelect(plan.id)}
                    className={`btn-bark-blue  transition-all duration-75 ease-in ${
                        plan?.id !== currentPlan
                            ? "!bg-transparent !text-[#070038]"
                            : ""
                    }`}
                >
                    {plan.title}
                </button>
            ))}
        </div>
    );
}
