import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

const LandingPage = (props) =>{
  return(
    <div>
      <NavBar 
        user={props.user}
        handleLogout={props.handleLogout}
      />
    </div>
  )
}

export default LandingPage;