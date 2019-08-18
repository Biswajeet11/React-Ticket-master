import React from 'react'
import axios from '../config/Axios'
import EmployeeForm from './form';
class EmployeeNew extends React.Component {
    constructor() {
        super()
        this.state = {
            errors: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(formData) {
        axios.post('/employees', formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data)
                if (response.data.errors) {
                    const errors = response.data.errors
                    this.setState({ errors })
                }
                else {
                    this.props.history.push('/employees')
                }
            })
    }

    render() {
        return (
            <div>
                <br />
                <EmployeeForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default EmployeeNew