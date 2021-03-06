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
      <div className='jumbotron'>
        <h3>Welcome to Sour Days! A place to store your favorite beers or save bars that are close to you.</h3>
        {props.user ? <h4>Add a beer or search beers near you to get started!</h4> : <h4>Login to get started!</h4>}
      </div>
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
  $('.pour')
    .delay(2000)
    .animate({
      height: '360px'
      }, 1500)
    .delay(1600)
    .slideUp(500);
  
  $('#liquid')
    .delay(3400)
    .animate({
      height: '170px'
    }, 2500);
  
  $('.beer-foam') 
    .delay(3400)
    .animate({
      bottom: '183px'
      }, 2500);
  });

export default LandingPage;