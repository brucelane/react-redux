import React from 'react';

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
          </button>
          <a className="navbar-brand" href="#"><h3>videodromm</h3></a>
        </div>
        <div className="collapse navbar-collapse" id="collapsemenu">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">controller</a></li>
            <li><a href="#">sign up</a></li>
            <li><a href="http://batchass.videodromm.com">batchass</a></li>
            <li><a href="https://github.com/videodromm">github</a></li>
            <li><a href="http://videodromm.github.io/documentation/">about</a></li>
          </ul>
        </div>
      </div>
    </nav>
   );
 }