import React,{Component} from 'react';

import Form from '../../components/Form/Form'



class AddBeer extends Component{

    handleAddBeer = ({nameOfPlace, location, beerName, rating}) => {
        const {user} = this.props
            const options = {
                method: 'POST',
                headers : {
                    "content-type" : "application/json"
                },
                body: JSON.stringify({nameOfPlace, location, beerName, rating, user})
            }    
            createBeer(options)
        }

    render(){
        

        return(
            <div>
                <h4>AddBeer</h4>
                <Form 
                    handleAddBeer={this.handleAddBeer}
                />
            </div>
        )
    }
}

export default AddBeer

async function createBeer(options){
    try{
        const sendPost = await fetch('http://localhost:3001/api/beers/create', options)
        const postReults = await sendPost.json()
        return await postReults
    } catch (error){
        console.log(error)
    }
}