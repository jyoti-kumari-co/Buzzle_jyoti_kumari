import React from 'react';
import './index.css';
const ChannelStyle = {
  display:'flex',
  
}

const CreatorComp = (props)=>{
    return (
        <>
          <div id="creatorComp">
              <div id="Creator" style={ChannelStyle}>
                  <img src={props.imgSrc} alt="" />
                  <p>{props.channelName}</p>
                  
                  <button>Room</button>
              </div>
          </div>
        </>
    )
}

export default CreatorComp;