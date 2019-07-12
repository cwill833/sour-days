import React, {Component} from 'react';
import {Route, Link, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'
import userService from '../../utils/userService'
import Beers from '../Beers/Beers'
import AddBeer from '../AddBeer/AddBeer'
import './App.css';
import { set } from 'mongoose';

class App extends Component{
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      beers: [
        {
          nameOfPlace: 'new new',
          location: 'Austin',
          beerName: 'sour',
          rating: 1
        }
      ]
    }
  }

  // componentDidMount(){
  //   getBeers().then(results => this.setState({
	// 		beers: {results}
	// 	}))
  // }

  handleAddBeer = ({nameOfPlace, location, beerName, rating}) => {
		// const options = {
		// 	method: 'POST',
		// 	headers : {
		// 		"content-type" : "application/json"
		// 	},
		// 	body: JSON.stringify({nameOfPlace, location, beerName, rating})
		// }

		// async function createPosts(){
		// 	try{
		// 		const sendPost = await fetch('http://localhost:8000/api/post', options)
		// 		const postReults = await sendPost.json()
		// 		return await postReults
		// 	} catch (error){
		// 		console.log(error)
		// 	}
		// }

		// createPosts().then(result => 
		// 	this.setState({
		// 	posts: [{...result}, ...this.state.posts]
    // }))
    this.setState({
      beers: [{nameOfPlace, location, beerName, rating}, ...this.state.beers]
    })
	}

  handleLogout = () => {
    userService.logOut()
    this.setState({
      user: null
    })
  }

  handleSignupOrLogin = ()=> {
    this.setState({user: userService.getUser()})
  }

  

  render(){

    
    return (
      <div>
        <Switch>
          <Route exact path='/' render={()=>
            <LandingPage 
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          }/>
          <Route exact path='/beers' render={()=>
            <Beers 
              beers={this.state.beers}
            />
          }/>
          <Route exact path='/addBeer' render={()=>
            <AddBeer
              beers={this.state.beers}
              handleAddBeer={this.handleAddBeer}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </Switch>
      </div>
    )
  }
}

async function getBeers(){
	try{
		const fetchBeers = await fetch('http://localhost:3001/api/beers/all')
		const data = fetchBeers.json()
		return await data
	} catch(error) {
		console.log(error)
	}
}

export default App;
