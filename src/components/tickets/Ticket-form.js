import React from 'react'
import axios from '../config/Axios'
class TicketForm extends React.Component {
    constructor() {
        super()
        this.state = {
            employee: '',
            employeeDatas: [],
            department: '',
            departmentDatas: [],
            priorities: ['High', 'Medium', 'Low'],
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    componentDidMount() {
        axios.get('/customers', {
            headers: {
                'x-auth': localStorage.getItem('token')
            },
        })
            .then(response => {
                console.log(response.data)
                this.setState({ employeeDatas: response.data })
                axios.get('/departments', {
                    headers: {
                        'x-auth': localStorage.getItem('token')
                    },
                })
                    .then(response => {
                        console.log(response.data)
                        this.setState({ departmentDatas: response.data })
                    })
            })

    }
    render() {
        return (
            <div>
                <form />
                <select value={this.state.employee} onChange={this.handleChange} name="employee">
                    <option value="">Select employee</option>
                    {
                        this.state.employeeDatas.map((employeeData) => {
                            return <option key={employeeData._id} value={employeeData._id}>{employeeData.name}</option>
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
                    return <label key={index} >{priority}
                        <input type="radio" value={priority} onChange={this.handleChange} />
                    </label>
                })}
                <br />
                <textarea />
            </div>
        )
    }
}
export default TicketForm