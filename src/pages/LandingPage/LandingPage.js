import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { tsPropertySignature } from '@babel/types';

const LandingPage = (props) =>{
    return(
        <NavBar 
            user={props.user}
            handleLogout={props.handleLogout}
        />
    )
}

export default LandingPage;