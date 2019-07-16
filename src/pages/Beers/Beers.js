import React from 'react';
import BeerPost from '../../components/BeerPost/BeerPost'
import NavBar from '../../components/NavBar/NavBar';
import style from './Beers.module.css'



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
    <div >
        <NavBar 
            user={props.user}
            handleLogout={props.handleLogout}
        />
        <div className="jumbotron">
          <h1>Welcome, {props.user.name}! See the beers you have saved below!</h1>
        </div>
        <div className={style.flex}>
          {show}
        </div>
    </div>
  )
}

export default Beers;