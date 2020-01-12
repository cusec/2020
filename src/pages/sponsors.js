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
            
                    <div id="sponsors" className="venue-conatiner">
                        <div className="center-container">
                            <h1>Sponsors</h1>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <a href="https://www.kinaxis.com/en" target="_blank" rel="noopener noreferrer"><img className="partner" alt="Kinaxis-Partner" src={Kinaxis} /></a>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                                <a href="https://www.shopify.ca/" target="_blank" rel="noopener noreferrer"><img className="gold-height" alt="Shopify-Gold" src={shopify} /></a>
                                <a href="https://www.rbcroyalbank.com/personal.html" target="_blank" rel="noopener noreferrer"> <img className="gold-width" alt="RBC-Gold" src={RBC} /></a>
                                <a href="https://www.wish.com/?&hide_login_modal=true" target="_blank" rel="noopener noreferrer"><img className="gold-height" alt="Wish-Gold" src={wish} /></a>
                                <a href="https://www.morganstanley.com/" target="_blank" rel="noopener noreferrer"><img className="gold-height" alt="Morgan_Stanley-Gold" src={MS} /></a>
                                <a href="https://www.cse-cst.gc.ca/careers-carrieres" target="_blank" rel="noopener noreferrer"><img className="gold-width" alt="CSE-Gold" src={CSE} /></a>
                                <a href="https://www.cae.com/" target="_blank" rel="noopener noreferrer"><img className="gold-width" alt="CAE-Gold" src={CAE} /></a>
                            </div>
                            <br /><br />
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                                <a href="https://www.tripadvisor.ca/" target="_blank" rel="noopener noreferrer"><img className="silver-width" alt="TripAdvisor-Silver" src={TripAdvisor} /></a>
                                <a href="https://www.amazon.ca/" target="_blank" rel="noopener noreferrer"><img className="silver-height" alt="Amazon-Silver" src={Amazon} /></a>
                                <a href="https://www.fellow.app/" target="_blank" rel="noopener noreferrer"><img className="silver-height" alt="Fellow-Silver" src={Fellow} /></a>
                                <a href="https://www.diffagency.com/" target="_blank" rel="noopener noreferrer"><img className="silver-width" alt="diff-Silver" src={diff} /></a>
                                <img className="silver-height" alt="knox-Silver" src={knox} />
                            </div>
                            <br /><br />
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                                <a href="https://1password.com/" target="_blank" rel="noopener noreferrer"><img className="friend-height" alt="1Password-Friend" src={Pass} /></a>
                                <a href="http://www.stickermule.com/supports/cusec-2020" target="_blank" rel="noopener noreferrer">
                                    <img className="friend-height" alt="Stickermule-Friend" src={Stickermule} />
                                </a>
                            </div>
                        </div>
                    </div>
     
            </React.Fragment>
        )
    }

}