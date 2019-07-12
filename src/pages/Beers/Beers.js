import React from 'react';
import { Link } from 'react-router-dom';
import BeerPost from '../../components/BeerPost/BeerPost'
import NavBar from '../../components/NavBar/NavBar';




const Beers = (props) =>{
  const beerList = props.beers.map((beer, index) => {
    return (
      <BeerPost
      {...beer}
        key={index}
        index={index}
        handleDeleteBeer={props.handleDeleteBeer}
      />
    )
  })

  return(
    <div>
        <NavBar 
            user={props.user}
            handleLogout={props.handleLogout}
            getBeers={props.getBeers}
        />
        <ul>{beerList}</ul>
        <Link to='/addBeer'>Add a beer</Link>
    </div>
  )
}

export default Beers;