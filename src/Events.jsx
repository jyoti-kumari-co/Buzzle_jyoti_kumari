import React from 'react';
import EventCards from './EventCards';
import './index.css'
// const Webpara = "We build compelling user experiences optimized to give our visitors exactly what they want.";
// const Respara = "We provide a fully responsive design which suitable for every kind of device."
// const Grapara = "We provide a variety of graphics and templates with modern look that shows our creativity."
const Events = (props)=>{

    return(
        <>
         <div id="Events">
    <h3>Top Live Events from {props.theme} world</h3>
       <div id="box">

       </div>
         <div id="cards">
         <EventCards name="Krish Naik" view="123.3k Viewers" img="https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835_960_720.jpg"/>
         <EventCards name="FreeCodeCamp.org" view="423.3k Viewers" img="https://cdn.pixabay.com/photo/2016/11/23/15/32/pedestrians-1853552_960_720.jpg"/>
         <EventCards name="Joma Tech" view="13.3k Viewers" img="https://cdn.pixabay.com/photo/2015/03/10/15/22/macbook-667280_960_720.jpg"/>
         <EventCards name="Ken Jee" view="125.3k Viewers" img="https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835_960_720.jpg"/>
         </div>
         <p id="see_more">see more</p>
         </div>
        </>
    )
}

export default Events;