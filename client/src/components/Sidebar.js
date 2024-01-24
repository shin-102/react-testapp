// Sidebar.js
import React from 'react';
import Logo from "../img/alogo-1.webp"
import Icon from "../img/bada65eaa7752eea9c01707f5711e3e8.jpg"

const Sidebar = () => {
  return (

    <div id="sidebar">
        <img id="logo" src={Logo} alt="logo" />
        <hr/>
        
        <ul id="menu">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>

        <div id="user-box">
        <hr/>
          <div id="user">
            <img src={Icon} alt="User Avatar"/>
              <div>
                  <p>User Name</p>
              </div>
          </div>
        </div>
    </div>

  );
};

export default Sidebar;

