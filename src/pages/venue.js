import React from 'react';
import hotelPool from "../assets/images/hotel_pool.png";
import hotelLobby from "../assets/images/hotel_lobby.png";
import hotelRoom from "../assets/images/hotel_room.png";


export default class Venue extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="venue-conatiner">
                    <div className="center-container">

                        <h1>The Venue</h1>
                        <div className="venue-content">
                            <div className="venue-images">
                                <img src={hotelPool}></img>
                                <div className="venue-bottom-images">
                                    <img src={hotelLobby} />
                                    <img src={hotelRoom} />
                                </div>
                            </div>
                            <div className="venue-desc">
                                <h1><span>Your Stay At</span><br /> The Hotel Bonaventure</h1>
                                <p>The Hotel Bonaventure  Montreal is a true Garden of Eden overlooking the bustling streets of the city. Connected to the underground city, Central Station and the business district, Old Montreal, and major attractions, this hotel is the perfect host for CUSEC 2020. </p>
                                <p><b>Students:</b> Your room bookings will only be done through your school’s head delegate. Contact them for more information.</p>
                                <p><b>Professionals:</b> CUSEC group rates start at $60/night. Use code ___ during booking to recieve. Contact info@cusec.net if you have any questions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}