import React from 'react'
class DepartmentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            name: this.state.name
        }
        this.props.handleSubmit(formData)
        this.setState({ name: '' })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name"> Name </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} id="name" />
                    <button type="submit" >submit</button>
                </form>
            </div>
        )
    }
}

export default DepartmentForm