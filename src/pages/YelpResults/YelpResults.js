import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import YelpResult from '../../components/YelpResult/YelpResult'



class YelpResults extends Component {
    constructor(){
        super()
        this.state ={
            location: [],
            searchResults: []
        }
    }

    componentDidMount(){
        getCurrentLatLng().then(results=>{
            const options = {
                method: 'POST',
                headers : {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(results)
            }  
            yelpFetch(options).then(results=>{
                this.setState({
                    location: results
                })
                console.log(this.state.location[0].is_closed)
            })

        })

    }

    render(){

    
        const yelp = this.state.location.map((result, index) => {
            return (
                <YelpResult
                    {...result}
                    key={index}
                    index={index}
                />
            )
        })
        
        let show = yelp.length > 0 ? yelp : 'Loading...'

        return(
            <div>
                <NavBar 
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />
                <ul>{show}</ul>
            </div>
        )
    }
}

export default YelpResults

const BASE_URL='/api/beers/'
async function yelpFetch(options){
    try{
        const sendPost = await fetch(BASE_URL + 'yelpSearch', options)
        const postReults = await sendPost.json()
        return await postReults
    } catch (error){
        console.log(error)
    }
}

function getCurrentLatLng() {
    // Wrap getCurrentPosition to return a promise
    return new Promise(resolve => {
      navigator.geolocation.getCurrentPosition(pos => resolve({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      }));
    });
  }