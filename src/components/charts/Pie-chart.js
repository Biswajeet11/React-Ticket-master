import { Pie } from 'react-chartjs-2'
import React from 'react'

class PieChartComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            labels: ['high', 'medium', 'low'],
            datasets: [{
                data: [20, 10, 9],
                backgroundColor: ['red', 'blue', 'green']
            }]
        }
    }
    render() {
        return (
            <div>
                <Pie
                data={{
                    labels:this.state.labels,
                    datasets:this.state.datasets
                }}
                height='50%'
                />
                <br/>
            </div>
        )
    }
}
export default PieChartComponent