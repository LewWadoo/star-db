import React from 'react';

import './header.css';

const Header = () => {
    return (
        <div className="header d-flex">
          <h3><a href="">Star DB</a></h3>
          <h4>the spinner "double ring" is provided by <a href="https://loading.io">loading.io</a></h4>
          <ul className="d-flex">
            <li><a href="">People</a></li>
            <li><a href="">Planets</a></li>
            <li><a href="">Starships</a></li>
          </ul>
        </div>
    );
};

export default Header;
