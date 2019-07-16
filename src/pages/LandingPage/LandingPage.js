import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './LandingPage.css'
import $ from 'jquery';

const LandingPage = (props) =>{
  
  return(
    <div>
      <NavBar 
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <div id="container">
        <div className='pour'></div>
        <div id="beaker">
          <div className='beer-foam'>
            <div className="foam-1"></div>
            <div className="foam-2"></div>
            <div className="foam-3"></div>
            <div className="foam-4"></div>
            <div className="foam-5"></div>
            <div className="foam-6"></div>
          </div>

          <div id="liquid">
    
          <div className="bubble bubble1"></div>
          <div className="bubble bubble2"></div>
          <div className="bubble bubble3"></div>
          <div className="bubble bubble4"></div>
          <div className="bubble bubble5"></div>
        </div>
      </div>
    </div>
  
    <h2 className="animated drunk">Fill'er Up Barkeeper!</h2>
    </div>
  )
}
$(document).ready(function() {
  $('.pour') //Pour Me Another Drink, Bartender!
    .delay(2000)
    .animate({
      height: '360px'
      }, 1500)
    .delay(1600)
    .slideUp(500);
  
  $('#liquid') // I Said Fill 'Er Up!
    .delay(3400)
    .animate({
      height: '170px'
    }, 2500);
  
  $('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
    .delay(3400)
    .animate({
      bottom: '183px'
      }, 2500);
  });

export default LandingPage;