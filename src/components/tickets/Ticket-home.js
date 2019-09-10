import React from 'react'
import TicketForm from './Ticket-form'
import TicketTable from './Ticket-table'
import axios from '../config/Axios'
import TicketRows from './Ticket-tab';
import PieChartComponent from '../charts/Pie-chart';
import HelloChart from '../charts/Bar-chart';
import ProgressBar from './Ticket-progress';
class TicketHome extends React.Component {
    constructor() {
        super()
        this.state = {
            tickets: [],
            buttonsTabs: ['All', 'High', 'Medium', 'Low'],
            labels: ['high', 'medium', 'low'],
            datasets: [{
                data: [0, 0, 0],
                backgroundColor: ['red', 'blue', 'green']
            }],
            filteredTickets: [],
            buttonsTab: '',
						trueDataLength: 0,
						progressLength:0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.changeTabs = this.changeTabs.bind(this)
        this.toggleChange = this.toggleChange.bind(this)
    }
    handleSubmit(ticketData) {
        axios.post('/tickets', ticketData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            },
        })
            .then(() => {
                this.setState(prevState => ({
                    filteredTickets: [ticketData, ...prevState.filteredTickets]
                }))
            })
            .catch(err => {
                console.log(err)
            })
    }

    toggleChange(checked) {
				console.log('checked is ....', checked.isResolved)
				const idData=checked.id
				console.log('id is ....', idData)
				axios.put(`/tickets/${idData}`, checked, {
					headers: {
							'x-auth' : localStorage.getItem('token')
					}
			})
			.then((response)=>{
				console.log(response.data)
				const trueData=this.state.filteredTickets.filter((tickets)=>{
					return tickets.isResolved === true
				})
				const trueDataLength=trueData.length
				this.setState({trueDataLength})
				const progressLength=Math.round((this.state.trueDataLength/this.state.filteredTickets.length)*100)
				this.setState({progressLength})
				console.log('The progressData is ',progressLength)
				console.log('The trueData is ',this.state.trueDataLength)
			})
    }

    componentDidMount() {
        axios.get('/tickets', {
            headers: {
                'x-auth': localStorage.getItem('token')
            },
        })
            .then(response => {
                console.log('response ...', response.data)
                const dataset = response.data.forEach((res) => {
                    if (res.priority === 'high' || res.priority === 'High') {
                        this.state.datasets[0].data[0] += 1
                    }
                    else if (res.priority === 'medium' || res.priority === 'Medium') {
                        this.state.datasets[0].data[1] += 1
                    }
                    else {
                        this.state.datasets[0].data[2] += 1
                    }
                })
                this.setState({ tickets: response.data, filteredTickets: response.data })
            })
    }

    changeTabs(index) {
        this.setState({ buttonsTab: index })
        if (index > 0) {
            const ticketFilter = this.state.tickets.filter(ticket => {
                return ticket.priority === this.state.buttonsTabs[index]
            })
            this.setState({ filteredTickets: ticketFilter })
        }
        else {
            this.setState({ filteredTickets: this.state.tickets })
        }
    }

    render() {
        return (
            <div>
                {this.state.buttonsTabs.map((buttonsTab, index) => {
                    return (
                        <TicketRows key={index} name={buttonsTab} changeTabs={() => { this.changeTabs(index) }} />
                    )
                })}
                <h2>Listing Tickets {this.state.filteredTickets.length}</h2>
                <TicketForm handleSubmit={this.handleSubmit} />
                <table >
                    <thead >
                        <tr>
                            <th scope="col">Code</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Department</th>
                            <th scope="col">Priority</th>
                            <th scope="col">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filteredTickets && this.state.filteredTickets.map((ticket, index) => {
													console.log(ticket.isResolved,'isresolved......')
                            return (
                                <TicketTable
																		key={ticket._id}
																		id={ticket._id}
                                    code={ticket.code}
                                    customer={ticket.customer}
                                    department={ticket.department}
                                    priority={ticket.priority}
                                    message={ticket.message}
																		isResolved={ticket.isResolved}
																		toggleChange={this.toggleChange}
                                />
                            )
                        })}
                    </tbody>
                </table>
                <h3>Some Stats</h3>
                <h4>Ticket Priority %</h4>
                <ProgressBar percent={this.state.progressLength} />
                <PieChartComponent labels={this.state.labels} datasets={this.state.datasets} />
                <HelloChart />
            </div>
        )
    }
}

export default TicketHome

