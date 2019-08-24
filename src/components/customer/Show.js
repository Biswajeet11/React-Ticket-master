import React from 'react'
import axios from '../config/Axios'
import { Link } from 'react-router-dom'
class CustomerShow extends React.Component {
    constructor() {
        super()
        this.state = {
            customers: {}
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`/customers/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((response) => {
                const customers = response.data
                this.setState({ customers })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const id = this.props.match.params.id
        return (
            <div>
                <h2 key={this.state.customers._id}>{this.state.customers.name}</h2>
                <Link to={`/customers/edit/${id}`}>edit</Link>
                <Link>remove</Link>
            </div>
        )
    }
}

export default CustomerShow