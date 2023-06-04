import React from "react";
import PlanTab from "./PlanTab";
import PriceCard from "./PriceCard";

const tabs = [
    {
        id: 1,
        title: "Mobile app",
        plans: [
            {
                id: 1,
                name: "Basic Plan",
                price: "$120",
                features: [
                    "3 pages app",
                    "3 days delivery",
                    "Unlimited Revision",
                    "User Flow",
                    "Developer Handoff",
                    "Source File",
                ],
            },
            {
                id: 2,
                name: "Standard Plan",
                price: "$600",
                features: [
                    "15 pages app",
                    "14 days delivery",
                    "Unlimited Revision",
                    "User Flow",
                    "Developer Handoff",
                    "Source File",
                ],
            },
            {
                id: 3,
                name: "Basic Plan",
                price: "$960",
                features: [
                    "24 pages app",
                    "21 days delivery",
                    "Unlimited Revision",
                    "5 Commercial licensed image",
                    "Developer Handoff",
                    "User Flow",
                    "Source File",
                ],
            },
        ],
    },
    {
        id: 2,
        title: "Web",
        plans: [
            {
                id: 1,
                name: "Basic Plan",
                price: "$120",
                features: [
                    "3 pages app",
                    "3 days delivery",
                    "Unlimited Revision",
                    "User Flow",
                    "Developer Handoff",
                    "Source File",
                ],
            },
            {
                id: 2,
                name: "Standard Plan",
                price: "$600",
                features: [
                    "15 pages app",
                    "14 days delivery",
                    "Unlimited Revision",
                    "User Flow",
                    "Developer Handoff",
                    "Source File",
                ],
            },
            {
                id: 3,
                name: "Basic Plan",
                price: "$960",
                features: [
                    "24 pages app",
                    "21 days delivery",
                    "Unlimited Revision",
                    "5 Commercial licensed image",
                    "Developer Handoff",
                    "User Flow",
                    "Source File",
                ],
            },
        ],
    },
    {
        id: 3,
        title: "Dashboard",
        plans: [
            {
                id: 1,
                name: "Basic Plan",
                price: "$120",
                features: [
                    "3 pages app",
                    "3 days delivery",
                    "Unlimited Revision",
                    "User Flow",
                    "Developer Handoff",
                    "Source File",
                ],
            },
            {
                id: 2,
                name: "Standard Plan",
                price: "$600",
                features: [
                    "15 pages app",
                    "14 days delivery",
                    "Unlimited Revision",
                    "User Flow",
                    "Developer Handoff",
                    "Source File",
                ],
            },
            {
                id: 3,
                name: "Basic Plan",
                price: "$960",
                features: [
                    "24 pages app",
                    "21 days delivery",
                    "Unlimited Revision",
                    "5 Commercial licensed image",
                    "Developer Handoff",
                    "User Flow",
                    "Source File",
                ],
            },
        ],
    },
];

export default function Pricing() {
    const [currentPlan, setCurrentPlan] = React.useState(tabs[0].id);
    const currentTab = tabs.find((tab) => tab.id === currentPlan);
    return (
        <section className="pt-14 xl:pt-20 !pb-0" id="pricing">
            <div className="pb-[16rem]">
                <div className="container mx-auto px-4">
                    <div className="grid place-items-center gap-10 lg:gap-14">
                        <h1
                            className="h1 text-center max-w-[24ch] leading-10 xl:leading-[4rem] mx-auto"
                            data-aos="fade-up"
                        >
                            We’ve got a pricing plan that’s perfect for you
                        </h1>
                        <PlanTab
                            plans={tabs}
                            onSelect={setCurrentPlan}
                            currentPlan={currentPlan}
                        />
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="container mx-auto px-4 translate-y-[-10rem]">
                    <div
                        className="grid gap-10 xl:gap-16 lg:grid-cols-3 place-items-center"
                        data-aos="fade-up"
                    >
                        {currentTab.plans.map((tab) => {
                            return (
                                <PriceCard
                                    title={tab.name}
                                    price={tab.price}
                                    category={currentTab.title}
                                    features={tab.features}
                                    key={tab.id}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
