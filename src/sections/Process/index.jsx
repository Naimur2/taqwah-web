import arrow1 from "../../images/Services/arrow-1.png";
import poly from "../../images/Services/poly.png";
import data from "./ServiceData";
import { useState } from "react";

export default function Process() {
    const [services, setServices] = useState("1");

    const filterData = data.find((d) => d.id === services);

    return (
        <section className="py-10 xl:py-14" id="process">
            <div className="service-polygon" data-aos="fade-up">
                <img src={poly} alt="" />
            </div>
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
                <div className="service-list">
                    <h1
                        className="inline-block relative after:block after:content-empty after:h-[4rem] after:w-[4rem]
                        md:after:h-[6rem] md:after:w-[6rem]
                         after:bg-arrowProcess
                    after:bg-contain after:bg-no-repeat after:absolute after:top-[-3rem] md:after:top-[-5rem] md:after:right-[-9rem] after:right-[-6rem]
                    "
                        data-aos="fade-up"
                    >
                        Our Process
                    </h1>
                    {data.map((dt) => (
                        <p
                            className="service-list-item"
                            onMouseEnter={() => setServices(dt.id)}
                            onClick={() => setServices(dt.id)}
                            key={dt.id}
                            data-aos="fade-up"
                        >
                            {dt.title}
                            <span className="service-svg">{dt.image}</span>
                        </p>
                    ))}
                </div>
                <div className="service-details">
                    <h1 data-aos="fade-up">{filterData && filterData.title}</h1>
                    <p data-aos="fade-up">{filterData && filterData.des}</p>
                    {/* <div className="service-hello-arrow">
                <img src={arrow3} alt="" />
            </div> */}
                    <a
                        className="block mt-4"
                        href="mailto:hellotaqwah@gmail.com"
                        data-aos="fade-up"
                    >
                        <button className="projects_btn shadow-lg__left">
                            Say Hello!
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}
