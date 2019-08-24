import React from 'react' 
import CustomerForm from './Form'
import axios from '../config/Axios';
import _ from 'lodash'
class CustomerEdit extends React.Component {
    constructor() {
        console.log('constructor - customer edit')
        super() 
        this.state = {
            customer: {}
        }
    }
    componentDidMount() {
        console.log('component did mount - customer edit')
        const id = this.props.match.params.id 
        axios.get(`/customers/${id}`, {
            headers: {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then(response => {
            const customer = response.data 
            this.setState({ customer })
        })
        .catch(err => {
            console.log(err) 
        })
    }
    handleSubmit = (formData) => {
        const id = this.props.match.params.id 
        axios.put(`/customers/${id}`, formData, {
            headers: {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then(response => {
            if(response.data.errors) {
                alert(response.data.message)
            } else { 
                this.props.history.push(`/customers/${response.data._id}`)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        console.log('render - customer edit')
        return (
            <div> 
                 <h2>Customer Edit</h2>
                { (Object.keys(this.state.customer).length !== 0) && <CustomerForm customer={this.state.customer} handleSubmit={this.handleSubmit} />}
                 
            </div>
        )
    }
}
export default CustomerEdit