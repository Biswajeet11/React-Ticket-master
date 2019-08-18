import React from 'react'
import _ from 'lodash'
import FormError from '../common/FormError';
import axios from '../config/Axios'
import CustomerForm from './Form';
class CustomerNew extends React.Component {
    constructor() {
        super()
        this.state = {
            errors: {}
        }
    }
    handleSubmit = formData => {
        console.log('new', formData);
        axios.post('/customers', formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                if (response.data.errors) {
                    const errors = response.data.errors
                    this.setState({ errors })
                }
                else {
                    this.props.history.push('/customers')
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1> Add Customers </h1>
                {
                    !_.isEmpty(this.state.errors) && <FormError errors={this.state.errors} />
                }
                <CustomerForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default CustomerNew