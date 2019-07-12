import React, { Component } from 'react'

const DeleteButton = ({index, handleDeleteBeer}) => {
    return(
        <button onClick={() => handleDeleteBeer(index)}>Delete Beer</button>
    )
}

export default DeleteButton