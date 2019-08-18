import React from 'react'
import {Link} from 'react-router-dom'
import axios from '../config/Axios';
import Employee from './Employee';
class EmployeeShow extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
        }
    }
    componentDidMount() {
        const apiId = this.props.match.params.id
        axios.get(`/employees/${apiId}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data)
                const name = response.data.name
                const email = response.data.email
                this.setState({ name, email })            
            })
    }
    render() {
        const { name, email, department } = this.state
        return (
            <div>
                <Employee name={name} email={email} />
                <Link to='/employees'>Back</Link>
                <br/> 
            </div>
        )
    }
}

export default EmployeeShow