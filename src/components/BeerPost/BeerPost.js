import React from 'react';

function BeerPost ({nameOfPlace, location, beerName, rating}) {
    return (
        <li>
            <h3>Bar/Brewery: {nameOfPlace}</h3>
            <h3>Location: {location}</h3>
            <h5>Name of Beer: {beerName}</h5>
            <h6>Your Rating: {rating}</h6>
        </li>
    )
}

export default BeerPost;