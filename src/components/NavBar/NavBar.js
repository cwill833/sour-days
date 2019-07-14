import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='/' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span>WELCOME, {props.user.name}</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/'>Home</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/beers'>See my beers</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/addBeer'>Add a beer</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/yelpResults'>See bars near you!</Link>
    </div>
    :
    <div>
      <Link to='/login'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup'>SIGN UP</Link>
    </div>;

  return(
    <div>
      {nav}
    </div>
  )
}

export default NavBar;