import React from 'react'
class CustomerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            mobile: ''
        }

    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })

    }
    handleSubmit = e => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile
        }
        this.props.handleSubmit(formData)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name"> Name</label>
                    <input type="text" value={this.state.name} name="name" id="name" placeholder="name" onChange={this.handleChange} />
                    <label htmlFor="email"> Email </label>
                    <input type="email" value={this.state.email} name="email" id="email" placeholder="email" onChange={this.handleChange} />
                    <label htmlFor="mobile"> Mobile</label>
                    <input type="text" value={this.state.mobile} name="mobile" id="mobile" placeholder="mobile" onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default CustomerForm