import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import style from './Form.module.css'

export default class Form extends Component {

	state = {
		nameOfPlace: '',
		location: '',
        beerName: '',
		rating: '1'
	}

	handleChange = event => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
		})
    }
    
 handleSubmit = async event => {
        event.preventDefault()
	 	await this.props.handleAddBeer(this.state)
		this.setState({
			nameOfPlace: '',
			location: '',
			beerName: '',
			rating: '1'
		}, () => this.props.history.push('/beers'));
			
    } 

	render() {
		return (
			<div className={`container ${style.flex}`}>
			<form onSubmit={this.handleSubmit} autoComplete='off' >
			  <div className="form-row">
				<div className="form-group col-md-6">
				  <label>Name of Place</label>
				  	<input
						onChange={this.handleChange}
						name="nameOfPlace"
						value={this.state.nameOfPlace}
						className="form-control"
					/>
				</div>
				<div className="form-group col-md-6">
					<label>Location</label>
					<input
						onChange={this.handleChange}
						name="location"
						value={this.state.location}
						className="form-control"
					/>
				</div>
				<div className="form-group col-md-6">
					<label>Name of beer</label>
					<input
						onChange={this.handleChange}
						name="beerName"
						value={this.state.beerName}
						className="form-control"
					/>
				</div>
				<div className="form-group col-md-6">
				  	<label>Rate from 1-10</label>
						<select
							onChange={this.handleChange}
							name='rating'
							value={this.state.rating}
							className="form-control"
						>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
						</select>
				</div>
			  </div>
			  <div>
				<input className="btn btn-info" type="submit"  />
			  </div>
				<Link to='/beers'>Back to your beers</Link>
			</form>
			</div>
		)
	}
}
