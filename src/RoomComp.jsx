import React from 'react';
import './index.css';
const ChannelStyle = {
  display:'flex',
  
}

const RoomComp = (props)=>{
    return (
        <>
          <div id="roomsComp">
              
              <div id="channel" style={ChannelStyle}>
                  <img src={props.imgSrc} alt="" />
                  <p>{props.channelName}</p>
                  <button>join</button>
              </div>
          </div>
        </>
    )
}

export default RoomComp;