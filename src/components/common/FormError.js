import React from 'react'

function FormError(props) {
    return (
        <div style={{ color: 'red' }}>
            <h2>These errors prohibited the form from being saved</h2>
            <ul>
                {Object.keys(props.errors).map((prop, index) => {
                    return <li key={index}>{props.errors[prop]['message']}</li>
                })}
            </ul>
        </div>
    )
}
export default FormError