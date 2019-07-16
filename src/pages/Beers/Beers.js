import React from 'react';
import BeerPost from '../../components/BeerPost/BeerPost'
import NavBar from '../../components/NavBar/NavBar';
import style from './Beers.module.css'



const Beers = (props) =>{
  // let sortBeer = props.beers.sort((a, b)=>{return a.distance - b.distance})
  // console.log(sortBeer)
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
        <div className={style.flex}>
          {show}
        </div>
    </div>
  )
}

export default Beers;