import React from 'react';
import './index.css'
const EventCards = (props) => {

    return (
        <>
        <div id="eventBox">
        <button id="boxBtn">Live</button>
            <div id="mainImg">
   
                <img src={props.img} alt="" />
          <p id="view">{props.view}</p>
            </div>
            <p>Lorem ipsum dolor sit amet </p>
            <p className="name">{props.name}</p>
        </div>
        </>
    )
}

export default EventCards;