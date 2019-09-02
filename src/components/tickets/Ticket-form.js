import React from 'react'
import axios from '../config/Axios'
class TicketForm extends React.Component {
    constructor() {
        super()
        this.state = {
            customer: '',
            customerDatas: [],
            department: '',
            departmentDatas: [],
            priorities: ['High', 'Medium', 'Low'],
            priority: '',
            message: '',
            code: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        const code = `COD${Math.ceil(Math.random() * 1000)}`
        e.preventDefault()
        const ticketData = {
            customer: this.state.customer,
            department: this.state.department,
            priority: this.state.priority,
            code: code,
            message: this.state.message,
        }
        this.props.handleSubmit(ticketData)
    }

    componentDidMount() {
        axios.get('/customers', {
            headers: {
                'x-auth': localStorage.getItem('token')
            },
        })
            .then(response => {
                console.log(response.data)
                this.setState({ customerDatas: response.data })
            })
        axios.get('/departments', {
            headers: {
                'x-auth': localStorage.getItem('token')
            },
        })
            .then(response => {
                console.log(response.data)
                this.setState({ departmentDatas: response.data })
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.customer} onChange={this.handleChange} name="customer">
                        <option value="">Select Customer</option>
                        {
                            this.state.customerDatas.map((customerData) => {
                                return <option key={customerData._id} value={customerData._id}>{customerData.name}</option>
                            })
                        }
                    </select>
                    <br />
                    <select value={this.state.department} onChange={this.handleChange} name="department">
                        <option value="">Select Department</option>
                        {this.state.departmentDatas.map((departmentData) => {
                            return <option key={departmentData._id} value={departmentData._id}>{departmentData.name}</option>
                        })}
                    </select>
                    <br />
                    {this.state.priorities.map((priority, index) => {
                        return <label key={index}>{priority}
                            <input type="radio" value={priority} onChange={this.handleChange} name="priority" />
                        </label>
                    })}
                    <br />
                    <textarea onChange={this.handleChange} name="message" value={this.state.message} />
                    <br />
                    <button type="submit" className="btn -sm btn-danger">Add Issue</button>
                </form>
            </div>
        )
    }
}

export default TicketForm