import '../App.css';
import React from 'react';

function Loader() {
  return (
    <div className="preloader">
      <div className="loader">
        <div className="diamond"></div>
        <div className="diamond"></div>
        <div className="diamond"></div>
      </div>
    </div>
  );
}

export default Loader;
