import React from 'react';
import BandwidthGraph from '../../components/graphs/bandwidthGraph';
import BandwidthGraphSnapshot from '../../components/graphs/bandwidthGraphSnapshot';
import './style.scss';

const Home = () => {
  return (
    <div className="ui-center-content">
      <BandwidthGraph />
      <div style={{width: '250px'}} className="ui-box">
        <div className="main-label">
        <p>changed</p>
        </div>

        <div className="sub-label">
        <p>Aj aj</p>
        </div>


        <div className="ui-graph-average-row">
          <div className="average-label">
            <p>Presentation</p>
          </div>
          <div className="average-value">
            <p>862</p>
          </div>
          <BandwidthGraphSnapshot />
        </div>
      </div>
    </div>
  )
};

export default Home;