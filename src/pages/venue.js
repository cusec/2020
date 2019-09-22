import React from 'react';
import hotelPool from "../assets/images/hotel_pool.png";
import hotelLobby from "../assets/images/hotel_lobby.png";
import hotelRoom from "../assets/images/hotel_room.png";
import Button from '@material-ui/core/Button';


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
                                <p><b>Professionals:</b> CUSEC group rates start at $60/night. Use code ___ during booking to recieve disctounted price. </p>
                                <p>Contact info@cusec.net if you have any questions.</p>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <a href="http://hotelbonaventure.com/en" target="_blank"><Button className="button" variant="small" >
                                        Book Room</Button></a>
                                    <a href="https://www.google.com/maps/place/Hotel+Bonaventure+Montr%C3%A9al/@45.4993335,-73.5649466,15z/data=!4m8!3m7!1s0x0:0x5c249de257b318c0!5m2!4m1!1i2!8m2!3d45.4993335!4d-73.5649466" target="_blank"><Button className="button" variant="small" >
                                        View Map</Button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}