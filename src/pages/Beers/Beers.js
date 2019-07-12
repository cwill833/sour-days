import React from 'react';
import { Link } from 'react-router-dom';
import BeerPost from '../../components/BeerPost/BeerPost'


const Beers= (props) =>{
  const beerList = props.beers.map((beer, index) => {
    return (
      <BeerPost
        key={index}
        {...beer}
        index={index}
      />
    )
  })

  return(
    <div>
      <ul>{beerList}</ul>
      <Link to='/addBeer'>Add a beer</Link>
    </div>
  )
}

export default Beers;