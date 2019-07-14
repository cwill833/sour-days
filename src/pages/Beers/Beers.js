import React from 'react';
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
        user={props.user}
      />
    )
  })

  let show = beerList.length > 0 ? beerList : 'Add a beer to see here!'

  return(
    <div>
        <NavBar 
            user={props.user}
            handleLogout={props.handleLogout}
        />
        <ul>{show}</ul>
    </div>
  )
}

export default Beers;