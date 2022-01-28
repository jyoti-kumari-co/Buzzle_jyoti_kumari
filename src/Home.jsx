import React from 'react';
import './index.css';
import Rooms from './Rooms';
import Creators from './Creators';
// import HomeIcon from '@mui/icons-material/Home';
// import QueueIcon from '@mui/icons-material/Queue';
const Home = () => {
    return (
      <>
       <div >
          <div id="upperPart">
            <ul>
              <li><i class="fas fa-home"></i> Home</li>
              <li>Rooms</li>
              <li>Playlist</li>
            </ul>
          </div> 
          <Rooms />
          <Creators />
          </div>
      </>
  )
}

export default Home;