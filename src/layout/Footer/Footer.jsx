import underline from "../../images/Services/underline.png";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="bg-[#070038] xl:pb-0">
            <div className="container px-4 py-10 flex items-center justify-between">
                <img
                    src="/images/taqwah-logo.svg"
                    alt="taqwah-logo"
                    srcset=""
                />
                <h3 className="text-white font-mabry font-medium text-lg xl:text-2xl">
                    made in dhaka
                </h3>
            </div>
        </footer>
    );
};

export default Footer;
