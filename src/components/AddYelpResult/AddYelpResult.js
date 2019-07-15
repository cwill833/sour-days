import React from 'react'

const AddYelpResult = (props) => {
    return(
        <button onClick={()=> props.handleAddYelp(props.nameOfPlace, props.location, props.beerName, props.rating)}>Add result to your list!</button>
    )
}

export default AddYelpResult