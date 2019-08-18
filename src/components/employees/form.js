import React from 'react'
import axios from '../config/Axios'
class EmployeeForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            mobile: '',
            department: '',
            departmentData: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    componentDidMount() {
        axios.get('/departments', {
            headers: {
                'x-auth': localStorage.getItem('token')
            },
        })
            .then(response => {
                console.log(response.data)
                this.setState({ departmentData: response.data })
            })
    }
    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            department: this.state.department
        }
        this.props.handleSubmit(formData)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">NAME</label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} name="name" id="name" />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input type="email" value={this.state.email} onChange={this.handleChange} name="email" id="email" />
                    <br />
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" value={this.state.mobile} onChange={this.handleChange} name="mobile" id="mobile" />
                    <br />
                    <select value={this.state.department} onChange={this.handleChange} name="department" >
                        <option value="">select user</option>
                        {
                            this.state.departmentData.map((department) => {
                                return <option key={department._id} value={department._id}>{department.name}</option>
                            }
                            )}
                    </select>
                    <br />
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}
export default EmployeeForm