import React from 'react'

const DeleteButton = ({index, handleDeleteBeer, user, _id}) => {
    return(
        <button className="btn btn-danger" onClick={() => handleDeleteBeer(index, user, _id)}>Delete Beer</button>
    )
}

export default DeleteButton