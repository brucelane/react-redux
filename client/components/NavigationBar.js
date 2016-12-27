import React from 'react';
import {Link} from 'react-router';

export default () => {
   return (
     <nav className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#collapsemenu"
            aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand">videodromm</Link>
        </div>
        <div className="collapse navbar-collapse" id="collapsemenu">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">controller</a></li>
            <li><Link to="/signup">sign up</Link></li>
            <li><a href="http://batchass.videodromm.com">batchass</a></li>
            <li><a href="https://github.com/videodromm">github</a></li>
            <li><a href="http://videodromm.github.io/documentation/">about</a></li>
          </ul>
        </div>
      </div>
    </nav>
   );
 }