import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import YelpResult from '../../components/YelpResult/YelpResult'
import createBeer from '../../utils/CreateBeer';
import style from './yelp.module.css'



class YelpResults extends Component {
    constructor(){
        super()
        this.state = {
            locations: [],
            added: false
        }
    }

    handleAddYelp = (nameOfPlace, location, beerName, rating) => {
        const {user} = this.props
        const options = {
            method: 'POST',
            headers : {
                "content-type" : "application/json"
            },
            body: JSON.stringify({nameOfPlace, location, beerName, rating, user})
        }
        createBeer(options)
        // this.props.history.push('/beers')
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
                results.sort((a, b)=>{return a.distance - b.distance})
                this.setState({
                    locations: results
                })
            })
        })
        
    }
    
    render(){ 
        const yelp = this.state.locations.map((result, index) => {
            return (
                <YelpResult
                    {...result}
                    key={index}
                    index={index}
                    handleAddYelp={this.handleAddYelp}
                />
            )
        })
        
        let show = (
            yelp.length > 0 ? 
            yelp : 
            <div className='loader'></div>
            )
        return(
            <div>
                <NavBar 
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />
                <div className="jumbotron">
                <h3>These are the closet bars to you {this.props.user.name}!</h3>
              </div>
                <div className={style.flex}>
                    {show}
                </div>
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