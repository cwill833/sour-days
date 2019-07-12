import React from 'react';
import DeleteButton from '../DeleteButton/DeleteButton'

function BeerPost ({nameOfPlace, location, beerName, rating, index, handleDeleteBeer, user, _id}) {
    return (
        <li>
            <h3>Bar/Brewery: {nameOfPlace}</h3>
            <h3>Location: {location}</h3>
            <h5>Name of Beer: {beerName}</h5>
            <h6>Your Rating: {rating}</h6>
            <DeleteButton 
                index={index}
                _id={_id}
                handleDeleteBeer={handleDeleteBeer}
                user={user}
            />
        </li>
    )
}

export default BeerPost;