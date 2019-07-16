import React,{Component} from 'react';
import createBeer from '../../utils/CreateBeer';
import Form from '../../components/Form/Form'

class AddBeer extends Component{

    handleAddBeer = async ({nameOfPlace, location, beerName, rating}) => {
        const {user} = this.props
            const options = {
                method: 'POST',
                headers : {
                    "content-type" : "application/json"
                },
                body: JSON.stringify({nameOfPlace, location, beerName, rating, user})
            }    
           return await createBeer(options)
        }

    render(){
        

        return(
            <div>
                <h4>AddBeer</h4>
                <Form 
                    handleAddBeer={this.handleAddBeer}
                    history={this.props.history}
                />
            </div>
        )
    }
}

export default AddBeer

// moved to utils
// const BASE_URL='/api/beers/'
// async function createBeer(options){
//     try{
//         const sendPost = await fetch(BASE_URL + 'create', options)
//         const postReults = await sendPost.json()
//         return await postReults
//     } catch (error){
//         console.log(error)
//     }
// }