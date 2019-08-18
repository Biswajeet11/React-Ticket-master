import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../config/Axios'
class EmployeesList extends React.Component {
    constructor() {
        super()
        this.state = {
            employees: []
        }
    }
    componentDidMount() {
        axios.get('/employees', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data)
                const employees = response.data
                this.setState({ employees })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.employees.map(employee => {
                        return <li key={employee._id}><Link to={`/employees/${employee._id}`}>{employee.name}</Link> {employee.mobile} {employee.email} {employee._id}</li>
                    })}
                </ul>
                <Link to='/employee/new'>Add Employees</Link>
            </div>
        )
    }
}

export default EmployeesList
