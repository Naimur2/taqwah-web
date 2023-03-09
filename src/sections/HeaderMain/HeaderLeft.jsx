import icon_4 from "../../images/HeaderMain/icon-4.svg";

export default function HeaderLeft() {
    return (
        <div className="header_left_box">
            <div className="left_inner">
                <h1>Our design make bridge between technology & human</h1>
                <img src={icon_4} alt="" />
                <a href="mailto:hellotaqwah@gmail.com">
                    <button className="home_btn shadow-lg__right">
                        Say hello!
                    </button>
                </a>
            </div>
        </div>
    );
}
