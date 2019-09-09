import React from 'react'

function ProgressBar(props) {
	const style = {
		width: `50%`
	}
	return (
		<div className="progress">
			<div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={style} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
				<h6>{props.percent}</h6>
			</div>
		</div>
	)
}
export default ProgressBar