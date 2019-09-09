import React from 'react'
class TicketTable extends React.Component {
	constructor() {
		super();
		this.state = {
			isChecked: false,
		}
	}
	toggleChange = (checked) => {
		this.setState({
			isChecked: !this.state.isChecked,
		})
		this.props.toggleChange(checked)
	}
	render() {
		return (
			<tr>
				<td>{this.props.code}</td>
				<td>{this.props.customer}</td>
				<td>{this.props.department}</td>
				<td>{this.props.priority}</td>
				<td>{this.props.message}</td>
				<td><input type="checkbox" checked={this.state.isChecked} onChange={() => { this.toggleChange(!this.state.isChecked) }} /></td>
			</tr>
		)
	}
}

export default TicketTable

