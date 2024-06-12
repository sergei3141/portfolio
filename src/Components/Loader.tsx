import '../App.css';
import React from 'react';

function Loader() {

  // setTimeout(()=>{
  //   document.getElementById('preloader')?.remove()
  // }, 1000)

  return (
    <div className="preloader" id="preloader">
      <div className="loader">
        <div className="diamond"></div>
        <div className="diamond"></div>
        <div className="diamond"></div>
      </div>
    </div>
  );
}

export default Loader;
