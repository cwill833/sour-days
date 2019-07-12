import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'
import userService from '../../utils/userService'
import Beers from '../Beers/Beers'
import AddBeer from '../AddBeer/AddBeer'
import './App.css';


class App extends Component{
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
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
    async function deleteBeers(){
      try{
        const deletedBeer = await fetch(`http://localhost:3001/api/beers/deleteBeer`, options)
        const data = await deletedBeer.json()
        return await data
      } catch(error) {
        console.log(error)
      }
    }

    deleteBeers().then(result=> {
      const newStateArray = this.state.beers.filter(
        (elem, idx) => idx !== result
        )
        this.setState({ beers: newStateArray })
    })
  }

  handleGetBeers = (user) => {
		const options = {
			method: 'POST',
			headers : {
				"content-type" : "application/json"
			},
			body: JSON.stringify({user})
		}

    async function getBeers(){
      try{
        const fetchBeers = await fetch(`http://localhost:3001/api/beers/all`, options)
        const data = await fetchBeers.json()
        return await data
      } catch(error) {
        console.log(error)
      }
    }
    getBeers().then(results => 
      this.setState({
			beers: results
    })
    )
  }

  handleAddBeer = ({nameOfPlace, location, beerName, rating}) => {
    const {user} = this.state
		const options = {
			method: 'POST',
			headers : {
				"content-type" : "application/json"
			},
			body: JSON.stringify({nameOfPlace, location, beerName, rating, user})
		}

		async function createBeer(){
			try{
				const sendPost = await fetch('http://localhost:3001/api/beers/create', options)
				const postReults = await sendPost.json()
				return await postReults
			} catch (error){
				console.log(error)
			}
		}

		createBeer().then(result => 
			this.setState({
			  beers: [{...result}, ...this.state.beers]
      }))
	}

  handleLogout = () => {
    userService.logOut()
    this.setState({
      user: null,
      beers: []
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
              user={this.state.user} 
              beers={this.state.beers}
              handleLogout={this.handleLogout}
              handleDeleteBeer={this.handleDeleteBeer}
              getBeers={this.handleGetBeers}

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

export default App;
