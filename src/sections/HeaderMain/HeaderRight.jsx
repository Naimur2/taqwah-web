import SocialCardLink from "../../components/SocialCardLink";
import arrow_1 from "../../images/HeaderMain/arrow-1.svg";
import arrow_2 from "../../images/HeaderMain/arrow-2.svg";

export default function HeaderRight() {
    return (
        <div className="header_right_box">
            <div className="right_inner">
                <div className="block_1">
                    <div className="item_1">
                        <SocialCardLink
                            link="https://www.figma.com/@taqwah_digital"
                            iconPath="/images/figma.svg"
                            iconAlt="figma"
                        />
                        <SocialCardLink
                            link="https://www.behance.net/taqwah_digital"
                            iconPath="/images/behance.svg"
                            iconAlt="behance"
                        />
                    </div>
                    <div className="grid gap-4">
                        <div className="flex justify-end items-center gap-2">
                            <img className="arrow" src={arrow_1} alt="" />
                            <h4 className="-mt-4">Website UI</h4>
                        </div>

                        <SocialCardLink
                            link="https://www.behance.net/gallery/138030333/NFT-Drak-Landing-Page-UIUX-Design-Free-Download"
                            iconPath="/images/website-ui.svg"
                            iconAlt="website-ui"
                            className="h-social-block !min-h-[7rem] !min-w-[10rem] sm:!min-h-[10rem] sm:!min-w-[14rem] xl:!min-h-[14rem] xl:!min-w-[18rem]"
                        />
                    </div>

                    <div className="item_3">
                        <SocialCardLink
                            link="https://dribbble.com/taqwah_digital"
                            iconPath="/images/dribble.svg"
                            iconAlt="dribble"
                            background="#FF7262"
                        />
                    </div>
                </div>
                <div className="block_2">
                    <div className="item_4">
                        <SocialCardLink
                            link="https://www.behance.net/gallery/140475327/NFT-Cryptocurrency-Exchange-Marketplace-Dashboard"
                            iconPath="/images/dashboard-ui.svg"
                            iconAlt="dashboard-ui"
                            className="h-social-block !min-h-[7rem] !min-w-[10rem] sm:!min-h-[10rem] sm:!min-w-[14rem] xl:!min-h-[14rem] xl:!min-w-[18rem]"
                        />
                        <div>
                            <h4>Dashboard UI</h4>
                            <img className="arrow" src={arrow_2} alt="" />
                        </div>
                    </div>
                    <div className="item_5">
                        <div>
                            <img className="arrow" src={arrow_1} alt="" />
                            <h4>APP UI</h4>
                        </div>
                        <SocialCardLink
                            link="https://ui8.net/taqwah/products/nft-market-uiux?status=6"
                            iconPath="/images/app-ui.svg"
                            iconAlt="app-ui"
                            className="h-social-block !min-h-[14rem] !min-w-[6rem] 
                            md:!min-h-[20rem] md:!min-w-[6rem] xl:!min-h-[28rem] 
                            xl:!min-w-[13rem] shadow-lg__right"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
