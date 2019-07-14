import React from 'react';
import NavBar from '../../components/NavBar/NavBar';


const LandingPage = (props) =>{

  return(
    <div>
      <NavBar 
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <h1>Could this page be any more bland......</h1>
    </div>
  )
}

export default LandingPage;