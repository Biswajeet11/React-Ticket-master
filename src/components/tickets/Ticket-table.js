import React from 'react'
function TicketTable(props) {
	return (
		<tr>
			<td>{props.code}</td>
			<td>{props.customer}</td>
			<td>{props.department}</td>
			<td>{props.priority}</td>
			<td>{props.message}</td>
		</tr>
	)
}

export default TicketTable

