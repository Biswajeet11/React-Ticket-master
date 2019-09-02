import React from 'react'
import { Link } from 'react-router-dom'
function TicketTabs() {
	return (
		<nav className="nav nav-pills flex-column flex-sm-row">
			<Link to='/tickets' className="flex-sm-fill text-sm-center nav-link">All</Link>
			<Link to='/tickets/high' className="flex-sm-fill text-sm-center nav-link">High</Link>
			<Link to='/tickets/medium' className="flex-sm-fill text-sm-center nav-link" >Medium</Link>
			<Link to='/tickets/low' className="flex-sm-fill text-sm-center nav-link" >Low</Link>
		</nav>
	)
}
export default TicketTabs