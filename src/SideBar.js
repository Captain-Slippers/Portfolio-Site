import React from 'react';
import './SideBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLink, faMapMarkerAlt , faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faLink, faMapMarkerAlt, faUser)

// Alternative
class SideBar extends React.Component{
  render(){
    return (
      <div className="SideBar">
        <h1>Adam Hall</h1>
        <h3>Full Stack Developer</h3>
        <span>
          <FontAwesomeIcon icon="link" />
          <p><a href="https://github.com/Captain-Slippers">github.com/Captain-Slippers</a></p>
        </span>
        <span>
          <FontAwesomeIcon icon="map-marker-alt" />
          <p>Brisbane, QLD</p>
        </span>
        <span>
          <FontAwesomeIcon icon="user" />
          <p>Available for hire</p>
        </span>
      </div>
    );
  }
}

export default SideBar;
