import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'
import userService from '../../utils/userService'
import BeersParent from '../BeersParent/BeersParent'
import AddBeer from '../AddBeer/AddBeer'
import './App.css';


class App extends Component{
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    }
  }

  // handleDeleteBeer = (beerIdx, user, _id) =>{
  //   const options = {
	// 		method: 'POST',
	// 		headers : {
	// 			"content-type" : "application/json"
	// 		},
	// 		body: JSON.stringify({beerIdx: beerIdx, _id: _id,user})
  //   }
  //   async function deleteBeers(){
  //     try{
  //       const deletedBeer = await fetch(`http://localhost:3001/api/beers/deleteBeer`, options)
  //       const data = await deletedBeer.json()
  //       return await data
  //     } catch(error) {
  //       console.log(error)
  //     }
  //   }

  //   deleteBeers().then(result=> {
  //     const newStateArray = this.state.beers.filter(
  //       (elem, idx) => idx !== result
  //       )
  //       this.setState({ beers: newStateArray })
  //   })
  // }

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
            <BeersParent
              user={this.state.user} 
              handleLogout={this.handleLogout}
              handleDeleteBeer={this.handleDeleteBeer}
            />
          }/>
          <Route exact path='/addBeer' render={()=>
            <AddBeer
              user={this.state.user}
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
