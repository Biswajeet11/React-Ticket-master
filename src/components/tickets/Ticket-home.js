import React from 'react'
import TicketForm from './Ticket-form'
import TicketTable from './Ticket-table'
import axios from '../config/Axios'
import TicketRows from './Ticket-tab';
import PieChartComponent from '../charts/Pie-chart';
import HelloChart from '../charts/Bar-chart';
class TicketHome extends React.Component {
    constructor() {
        super()
        this.state = {
            tickets: [],
            buttonsTabs: ['All', 'High', 'Medium', 'Low'],
            labels: ['high', 'medium', 'low'],
            datasets: [{
                data: [20, 10, 9],
                backgroundColor: ['red', 'blue', 'green']
            }],
            filteredTickets: [],
            buttonsTab: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.changeTabs = this.changeTabs.bind(this)
    }
    handleSubmit(ticketData) {
        axios.post('/tickets', ticketData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            },
        })
            .then(response => {
                this.setState(prevState => ({
                    filteredTickets:[ticketData, ...prevState.filteredTickets]
                }))
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount() {
        axios.get('/tickets', {
            headers: {
                'x-auth': localStorage.getItem('token')
            },
        })
            .then(response => {
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
                            return (
                                <TicketTable
                                    key={index}
                                    code={ticket.code}
                                    customer={ticket.customer}
                                    department={ticket.department}
                                    priority={ticket.priority}
                                    message={ticket.message} />
                            )
                        })}
                    </tbody>
                </table>
                <h3>Some Stats</h3>
                <h4>Ticket Priority %</h4>
                <PieChartComponent />
                <HelloChart/>
            </div>
        )
    }
}

export default TicketHome

