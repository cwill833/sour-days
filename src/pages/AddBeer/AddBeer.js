import React,{Component} from 'react';

import Form from '../../components/Form/Form'



class AddBeer extends Component{
    render(){

        return(
            <div>
                <h4>AddBeer</h4>
                <Form 
                    handleAddBeer={this.props.handleAddBeer}
                />
            </div>
        )
    }
}

export default AddBeer