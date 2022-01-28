import React from 'react';
import Home from './Home';
import LiveStream from './LiveStream';
import './index.css';



const Context = () =>{

    return (
        <>
        <div id="Context">
  <div id="home"><Home/></div>
             
      <div id="liveStream">
      <LiveStream/>
      </div>      
            </div>
        </>
    )
}
export default Context;