import HeaderLeft from "./HeaderLeft";
import "./HeaderMain.scss";
import HeaderRight from "./HeaderRight";

const HeaderMain = () => {
    return (
        <section id="header_main">
            <div className="container header_container">
                <div className="header_wrapper">
                    <HeaderLeft />
                    <HeaderRight />
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;
