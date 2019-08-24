import React from 'react'
import axios from '../config/Axios'
import { Link } from 'react-router-dom'
import SearchBox from '../common/Search-box';
class CustomerList extends React.Component {
    constructor() {
        super()
        this.state = {
            customers: [],
            isLoading: true
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        console.log('componentdid mount....')
        axios.get('/customers', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data)
                const customers = response.data
                this.setState({ customers, isLoading: false })
                return customers
            }
            )
            .catch(err => console.log(err))
    }

    handleChange(text) {
        console.log(this.state.customers)
        const customerDatas = this.state.customers
        const customers = customerDatas.filter((customerData => {
            return customerData.name.toLowerCase().includes(text)
        }))

        if (this.state.customers.length) {
            this.setState({ customers })

        }
        else {
            console.log(`${customers}......`)
            this.componentDidMount()
        }
    }



    render() {
        return (
            <div>
                <h1>The list of customers {this.state.customers.length}</h1>
                <SearchBox handleChange={this.handleChange} />
                {this.state.isLoading ? (
                    <h1>Loading.....</h1>
                ) : (
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.customers.map((customer, index) => {
                                        return (
                                            <tr key={customer._id}>
                                                <td>{index + 1}</td>
                                                <td><Link to={`/customers/${customer._id}`}>{customer.name}</Link></td>
                                                <td>{customer.email}</td>
                                                <td>{customer.mobile}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                <Link to="/customers/new">Add Customer</Link>
            </div>
        )

    }
}
export default CustomerList