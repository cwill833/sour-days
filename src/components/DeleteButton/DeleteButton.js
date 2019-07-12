import React from 'react'

const DeleteButton = ({index, handleDeleteBeer, user, _id}) => {
    return(
        <button onClick={() => handleDeleteBeer(index, user, _id)}>Delete Beer</button>
    )
}

export default DeleteButton