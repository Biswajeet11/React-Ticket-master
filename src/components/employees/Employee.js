import React from 'react'
function Employee(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <h2>{props.email}</h2>
        </div>
    )
}
export default Employee