import { Pie } from 'react-chartjs-2'
import React from 'react'

class PieChartComponent extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         // labels: ['high', 'medium', 'low'],
    //         datasets: [{
    //             data: [20, 10, 9],
    //             backgroundColor: ['red', 'blue', 'green']
    //         }]
    //     }
    // }
    render() {
        console.log(this.props, 'props...')
        return (
            <Pie
                data={{
                    labels: this.props.labels,
                    datasets: this.props.datasets
                }}
                height={50}
            />
        )
    }
}
export default PieChartComponent