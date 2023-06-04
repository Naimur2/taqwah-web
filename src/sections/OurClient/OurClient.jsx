import { useState } from "react";
import image_1 from "../../images/OurClient/carousels/1.png";
import left_arrow from "../../images/OurClient/left-arrow.svg";
import polygon from "../../images/OurClient/polygon.svg";
import right_arrow from "../../images/OurClient/right-arrow.svg";
import "./OurClient.scss";

const reviews = [
    {
        id: 1,
        name: "Imrul Kayes",
        designation: "Senior Product Designer Hadiyat",
        review: "They are very kind, patient and flexible. They are reliable and we love working with them so much, that we have already started project number two with them. I also referred someone else to them.",
        image: image_1,
    },
    {
        id: 2,
        name: "Jhon Doe",
        designation: "Manager, Hadiyat",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cum dicta dolor autem labore aliquam eveniet? Provident ipsam voluptate corrupti.",
        image: image_1,
    },
    {
        id: 3,
        name: "Sakib Al Hasan",
        designation: "CEO, Hadiyat",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt optio asperiores error reprehenderit tempore id, architecto soluta perspiciatis accusantium eum. Deleniti placeat iste cupiditate iusto?",
        image: image_1,
    },
];

const OurClient = () => {
    const [review, setReview] = useState(0);

    const handleNextReview = () => {
        if (review < reviews.length - 1) {
            setReview(review + 1);
        }
    };

    const handlePrevReview = () => {
        if (review > 0) {
            setReview(review - 1);
        }
    };

    const { name, designation, review: reviewText, image } = reviews[review];

    return (
        <section
            id="clients-love"
            className="flex items-center justify-between flex-wrap gap-8 "
        >
            <div className="w-full md:w-[48%]">
                <div className="half-container half-container-left">
                    <div className="grid grid-cols-[auto,1fr] py-4">
                        <div className="w-14 h-14 xl:w-24 xl:h-24 ">
                            <img
                                className="relative object-contain h-full w-full"
                                src={polygon}
                                alt=""
                                data-aos="fade-up"
                            />
                        </div>
                        <div className="client_left_inner pt-20">
                            <h2 className="!mb-8" data-aos="fade-up">
                                Our Client
                            </h2>
                            <p data-aos="fade-up">“{reviewText}”</p>
                            <div className="name">
                                <h4 data-aos="fade-up">{name}</h4>
                                <p data-aos="fade-up">{designation}</p>
                            </div>
                            <div className="review_arrow">
                                <img
                                    src={left_arrow}
                                    alt=""
                                    onClick={handlePrevReview}
                                    className="cursor-pointer"
                                    data-aos="fade-up"
                                />

                                <img
                                    src={right_arrow}
                                    alt=""
                                    onClick={handleNextReview}
                                    className="cursor-pointer"
                                    data-aos="fade-up"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-[48%] bg-white py-24">
                <div className="half-container half-container-right">
                    <div className="w-full flex justify-center items-center">
                        <div
                            className={`w-full max-w-[20rem] sm:max-w-none
                            sm:w-[20rem] sm:h-[16rem] xl:w-[26rem] xl:h-[20rem]
                            aspect-video border-2 border-[#070038] relative border-solid z-10
                            after:bg-[#070038] after:block  after:content-empty after:left-[2px] after:right-[2px] after:top-[2px] 
                                after:bottom-[2px] after:absolute after:z-[-10] after:transition-all after:duration-500 after:ease-in-out
                                after:rotate-[5deg]
                        `}
                            data-aos="fade-up"
                        >
                            <img
                                src={image}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurClient;
