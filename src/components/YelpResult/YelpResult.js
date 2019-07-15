import React from 'react';
import AddYelpResult from '../AddYelpResult/AddYelpResult';

function YelpResult ({name, location, price, rating, review_count, is_closed, handleAddYelp}) {
    return (
        <li>
            <h6>Bar/Brewery: {name}</h6>
            <h6>Location: {location.address1} {location.city}</h6>
            <h6>Price: {price ? price : 'Not Available'}</h6>
            <h6>Yelp rating: {rating}</h6>
            <h6>Yelp reviews: {review_count}</h6>
            <h6>{is_closed.toString() === 'true' ? 'Sorry, we are closed :(' : 'We are open!'}</h6>
            <AddYelpResult 
                handleAddYelp={handleAddYelp}
                nameOfPlace={name}
                location={location.city}
                beerName='Yelp Result'
                rating={rating}
            />
        </li>
    )
}

export default YelpResult;