import React from 'react'

class SearchBox extends React.Component {
    constructor() {
        super()
        this.state = {
            text: ''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
    }
    handleChange(e){
        e.preventDefault()
        const text=e.target.value
        this.setState({text})
        this.props.handleChange(text)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="search" value={this.state.text} onChange={this.handleChange} />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}
export default SearchBox 