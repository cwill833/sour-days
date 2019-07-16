import React from 'react';
import AddYelpResult from '../AddYelpResult/AddYelpResult';


function YelpResult ({name, location, price, rating, review_count, is_closed, handleAddYelp, distance}) {
    function metersToFeet(meters){
        let feet = Math.floor(meters * 3.28)
        return `You are ${feet} feet away`
    }
    
    let feet = metersToFeet(distance)

    return (
        <div className="card" style={{width: "28rem"}}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Bar/Brewery: {name}</li>
                <li className="list-group-item">Location: {location.address1} {location.city}</li>
                <li className="list-group-item">Price: {price ? price : 'Not Available'}</li>
                <li className="list-group-item">Yelp rating: {rating}</li>
                <li className="list-group-item">Yelp reviews: {review_count}</li>
                <li className="list-group-item">{feet}</li>
                <li className="list-group-item">{is_closed.toString() === 'true' ? 'Sorry, we are closed :(' : 'We are open!'}</li>
                <AddYelpResult 
                    handleAddYelp={handleAddYelp}
                    nameOfPlace={name}
                    location={location.city}
                    beerName='Yelp Result'
                    rating={rating}
                />
            </ul>
        </div>
    )
}

export default YelpResult;