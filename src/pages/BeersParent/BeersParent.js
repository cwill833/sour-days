import React, {Component} from 'react';
import Beers from '../Beers/Beers';

class BeersParent extends Component {
    constructor(){
        super()
        this.state ={
            beers: []
        }
    }

    handleDeleteBeer = (beerIdx, user, _id) =>{
        const options = {
                method: 'POST',
                headers : {
                    "content-type" : "application/json"
                },
                body: JSON.stringify({beerIdx: beerIdx, _id: _id,user})
        }

    
        deleteBeers(options).then(result=> {
          const newStateArray = this.state.beers.filter(
            (elem, idx) => idx !== result
            )
            this.setState({ beers: newStateArray })
        })
      }


    componentDidMount(){
        const options = {
            method: 'POST',
            headers : {
                "content-type" : "application/json"
            },
            body: JSON.stringify(this.props.user)
        }

        getBeers(options).then(results => 
            this.setState({
                beers: results
            })
        )
    }

    render(){

        return(
            <Beers 
                user={this.props.user} 
                beers={this.state.beers}
                handleLogout={this.props.handleLogout}
                handleDeleteBeer={this.handleDeleteBeer}
            />
        )

    }
}

export default BeersParent

//TODO remove to utils

const BASE_URL='/api/beers/'
async function getBeers(options){
    try{
        const fetchBeers = await fetch(BASE_URL + 'all', options)
        const data = await fetchBeers.json()
        return await data
    } catch(error) {
        console.log(error)
    }
}

async function deleteBeers(options){
    try{
      const deletedBeer = await fetch(BASE_URL + 'deleteBeer', options)
      const data = await deletedBeer.json()
      return await data
    } catch(error) {
      console.log(error)
    }
  }

