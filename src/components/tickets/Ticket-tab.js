import React from 'react'
class TicketRows extends React.Component {
	constructor() {
		super()
		this.changeTabs = this.changeTabs.bind(this)
	}
	changeTabs(index) {
		this.props.changeTabs(index)
	}
	render() {
		return (
			<nav className="nav nav-pills flex-column flex-sm-row">
				<button type="button" className="btn btn-outline-info" onClick={() => {
					this.changeTabs()
				}}>{this.props.name}</button>
			</nav>
		)
	}
}
export default TicketRows