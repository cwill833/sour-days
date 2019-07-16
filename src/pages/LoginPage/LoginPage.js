import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import style from './LoginPage.module.css'
class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    // TODO: implement in an elegant way
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      //let app know user has signed up
      this.props.handleSignupOrLogin()
      // Successfully signed up - show beers
      this.props.history.push('/beers');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      alert('Invalid Credentials')
    }
  }

  render() {
    return (
      <div className={`container ${style.flex}`}>
      <form onSubmit={this.handleSubmit} autoComplete='off' >
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Email</label>
            <input className="form-control" type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
          </div>
          <div className="form-group col-md-6">
            <label>Password</label>
            <input className="form-control" type="password" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
          </div>
        </div>
        <button className="btn btn-primary">Log In</button>&nbsp;&nbsp;&nbsp;
        <Link to='/'>Cancel</Link>
      </form>
      </div>
    );
  }
}

export default LoginPage;
