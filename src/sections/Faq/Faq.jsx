import React from "react";
import Collapsable from "../../components/Collapsable";

const items = [
    {
        id: "1",
        title: "1. How many revisions i might get?",
        description: `Lorem ipsum dolor sit amet consectetur. In magna elementum massa nisl phasellus massa leo odio. Nunc leo diam cursus sit. Dui leo donec imperdiet urna. Phasellus nulla pharetra ac feugiat volutpat sit morbi ac. Luctus laoreet curabitur sit libero.`,
    },
    {
        id: "2",
        title: "2. Can i do milestones based project?",
        description: `Lorem ipsum dolor sit amet consectetur. In magna elementum massa nisl phasellus massa leo odio. Nunc leo diam cursus sit. Dui leo donec imperdiet urna. Phasellus nulla pharetra ac feugiat volutpat sit morbi ac. Luctus laoreet curabitur sit libero.`,
    },
    {
        id: "3",
        title: "3. Can i get services for website, app, and dashboard?",
        description: `Lorem ipsum dolor sit amet consectetur. In magna elementum massa nisl phasellus massa leo odio. Nunc leo diam cursus sit. Dui leo donec imperdiet urna. Phasellus nulla pharetra ac feugiat volutpat sit morbi ac. Luctus laoreet curabitur sit libero.`,
    },
    {
        id: "4",
        title: "4. Can i get prototype to help the developer?",
        description: `Lorem ipsum dolor sit amet consectetur. In magna elementum massa nisl phasellus massa leo odio. Nunc leo diam cursus sit. Dui leo donec imperdiet urna. Phasellus nulla pharetra ac feugiat volutpat sit morbi ac. Luctus laoreet curabitur sit libero.`,
    },
    {
        id: "5",
        title: "5. Which software you use to design?",
        description: `Lorem ipsum dolor sit amet consectetur. In magna elementum massa nisl phasellus massa leo odio. Nunc leo diam cursus sit. Dui leo donec imperdiet urna. Phasellus nulla pharetra ac feugiat volutpat sit morbi ac. Luctus laoreet curabitur sit libero.`,
    },
    {
        id: "6",
        title: "6. What type of deliverable file i will get?",
        description: `Lorem ipsum dolor sit amet consectetur. In magna elementum massa nisl phasellus massa leo odio. Nunc leo diam cursus sit. Dui leo donec imperdiet urna. Phasellus nulla pharetra ac feugiat volutpat sit morbi ac. Luctus laoreet curabitur sit libero.`,
    },
];

export default function Faq() {
    const [active, setActive] = React.useState("1");

    const handleClick = (id: string) => {
        if (active === id) {
            setActive("");
        } else {
            setActive(id);
        }
    };

    return (
        <section className="py-14 xl:py-20 bg-[#FFFFFF]" id="faq">
            <div className="container mx-auto grid gap-4">
                <div className="grid gap-4 place-items-center">
                    <h1
                        data-aos="fade-up"
                        className="font-mabry text-[#070038] font-medium text-[2rem] leading-10 lg:text-[2.5rem] lg:leading-[3.45rem] xl:text-[3rem] xl:leading-[4rem] text-center"
                    >
                        Frequently asked Questions
                    </h1>
                    <p
                        data-aos="fade-up"
                        className="font-mabry text-[#070038] text-base xl:text-lg font-light text-center"
                    >
                        Common questions that people usually asked
                    </p>
                </div>
                <div className="grid gap-4 w-full max-w-[60rem] mx-auto mt-8">
                    {items.map((item) => (
                        <Collapsable
                            key={item.id}
                            title={item.title}
                            isOpen={active === item.id}
                            onToggle={() => handleClick(item.id)}
                        >
                            <Collapsable.Text>
                                {item.description}
                            </Collapsable.Text>
                        </Collapsable>
                    ))}
                </div>
            </div>
        </section>
    );
}
