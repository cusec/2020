import React from 'react';
import ScrollableAnchor from "react-scrollable-anchor";
import Kinaxis from "../assets/images/sponsors/Kinaxis-Partner.png";
import CAE from "../assets/images/sponsors/CAE_Logo_w-Gold.png";
import CSE from "../assets/images/sponsors/cse-white-Gold.PNG";
import MS from "../assets/images/sponsors/MS_Logo-Gold.png";
import shopify from "../assets/images/sponsors/shopify_logo_white-Gold.png";
import wish from "../assets/images/sponsors/WISH_Blue-Gold.png";
import RBC from "../assets/images/sponsors/rbc-logo-Gold.png";
import TripAdvisor from "../assets/images/sponsors/tripadvisor-Silver.png";
import Amazon from "../assets/images/sponsors/amazon-Silver.png";
import Fellow from "../assets/images/sponsors/fellow_white.png";
import diff from "../assets/images/sponsors/diff_logo.png";
import knox from "../assets/images/sponsors/Knox-white.png";
import Pass from "../assets/images/sponsors/1Password-Friend.png";
import Stickermule from "../assets/images/sponsors/sticker-mule-white.png";

export default class Sponsors extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ScrollableAnchor id={"sponsors"}>
                    <div className="venue-conatiner">
                        <div className="center-container">
                            <h1>Sponsors</h1>
                            <div style={{ display: "flex", justifyContent: "center" }}><img className="partner" alt="Kinaxis-Partner" src={Kinaxis} /></div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}><img className="gold-height" alt="Shopify-Gold" src={shopify} />
                                <img className="gold-width" alt="RBC-Gold" src={RBC} />
                                <img className="gold-height" alt="Wish-Gold" src={wish} />
                                <img className="gold-height" alt="Morgan_Stanley-Gold" src={MS} />
                                <img className="gold-width" alt="CSE-Gold" src={CSE} />
                                <img className="gold-width" alt="CAE-Gold" src={CAE} />
                            </div>
                            <br/><br/>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}><img className="silver-width" alt="TripAdvisor-Silver" src={TripAdvisor} />
                                <img className="silver-height" alt="Amazon-Silver" src={Amazon} />
                                <img className="silver-height" alt="Fellow-Silver" src={Fellow} />
                                <img className="silver-width" alt="diff-Silver" src={diff} />
                                <img className="silver-height" alt="knox-Silver" src={knox} />
                            </div>
                            <br/><br/>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                            <img className="friend-height" alt="1Password-Friend" src={Pass} />
                            <a href="http://www.stickermule.com/supports/cusec-2020" target="_blank">
                                <img className="friend-height" alt="Stickermule-Friend" src={Stickermule} />
                            </a>
                            </div>
                        </div>
                    </div>
                </ScrollableAnchor>
            </React.Fragment>
        )
    }

}