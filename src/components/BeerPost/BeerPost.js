import React from 'react';
import DeleteButton from '../DeleteButton/DeleteButton'

function BeerPost ({nameOfPlace, location, beerName, rating, index, handleDeleteBeer, user, _id}) {
    return (
        <div className="card" style={{width: "25rem"}}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Bar/Brewery: {nameOfPlace}</li>
                <li className="list-group-item">Location: {location}</li>
                <li className="list-group-item">Name of Beer: {beerName}</li>
                <li className="list-group-item">Your Rating: {rating}</li>
                <DeleteButton 
                    index={index}
                    _id={_id}
                    handleDeleteBeer={handleDeleteBeer}
                    user={user}
                />
            </ul>
        </div>
    )
}

export default BeerPost;