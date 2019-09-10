import React from 'react'
class TicketTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isResolved: props.isResolved,
		}
	}
	toggleChange = (checked) => {
		this.setState({
			isResolved: !this.state.isResolved,
		})
		const checkData = {
			id: this.props.id,
			isResolved: checked,
			code: this.props.code,
			customer: this.props.customer,
			department: this.props.department,
			message: this.props.message,
			priority: this.props.priority
		}
		this.props.toggleChange(checkData)
		console.log(this.props, 'the prop is..')
	}
	render() {
		return (
			<tr>
				<td>{this.props.code}</td>
				<td>{this.props.customer}</td>
				<td>{this.props.department}</td>
				<td>{this.props.priority}</td>
				<td>{this.props.message}</td>
				<td><input type="checkbox" checked={this.state.isResolved} onChange={() => { this.toggleChange(!this.state.isResolved) }} /></td>
			</tr>
		)
	}
}

export default TicketTable

