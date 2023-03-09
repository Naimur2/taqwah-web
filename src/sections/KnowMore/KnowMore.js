import { useState } from "react";
import arrow_1 from "../../images/KnowMore/arrow-1.png";
import "./KnowMore.scss";

const KnowMore = () => {
    const [name, setName] = useState("1");
    const data = [
        {
            _id: "1",
            title: "How do I list with The Agency, Inc.?",
            description:
                "We attach great importance to clear and honest communication and are happy to answer your questions. If your question is not in the list, please feel free to contact us.",
        },
        {
            _id: "2",
            title: "Do you require prior experience or training?",
            description:
                "We attach great importance to clear and honest communication and are happy to answer your questions. If your question is not in the list, please feel free to contact us.",
        },
        {
            _id: "3",
            title: "What types of models, actors, or others are you looking for and what kinds of bookings could I expect?",
            description:
                "We attach great importance to clear and honest communication and are happy to answer your questions. If your question is not in the list, please feel free to contact us.",
        },
    ];
    const filteredValue = data.find((d) => d._id === name);

    return (
        <main id="know_more">
            <div className="knowmore_content">
                <div className="container knowmore_container">
                    <div className="knowmore_wrapper">
                        <div className="desktop_arrow">
                            <img src={arrow_1} alt="" />
                        </div>
                        <div className="mobile_arrow">
                            <img src={arrow_1} alt="" />
                        </div>
                        <div className="knowmore_left_item">
                            <div className="knowmore_left_inner">
                                <h1>Frequently asked Questions</h1>
                                <div className="inner_item">
                                    <select
                                        id="questions"
                                        name="questions"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    >
                                        {data.map((val) => (
                                            <option
                                                key={val._id}
                                                value={val._id}
                                            >
                                                {val.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="knowmore_right_item">
                            <h2>{filteredValue && filteredValue.title}</h2>
                            <p>{filteredValue && filteredValue.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <small>
                    &copy; Copyright Taqwah_Digital. All rights reserved &reg;
                </small>
                <br />
                <small>terms and conditions | taqwah</small>
            </div>
        </main>
    );
};

export default KnowMore;
