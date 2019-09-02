import React from 'react'
import TicketForm from './Ticket-form'
import TicketTabs from './Ticket-tab'
import TicketTable from './Ticket-table'
import axios from '../config/Axios'
class TicketHome extends React.Component {
    constructor() {
        super()
        this.state = {
            tickets: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(ticketData) {
        axios.post('/tickets', ticketData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            },
        })
            .then(response => {
                if (!response.data) {
                    console.log('the errors are...')
                }
                else {
                    console.log('data....', response.data)
                    this.setState(prevState => ({
                        tickets: [ticketData, ...prevState.tickets]
                    }))
                }
            })
            .catch(err => {
                console.log('The error is.....', err)
            })
    }
    componentDidMount() {
        axios.get('/tickets', {
            headers: {
                'x-auth': localStorage.getItem('token')
            },
        })
            .then(response => {
                console.log('component did mount', response.data)
                this.setState({ tickets: response.data })
            })
    }
    render() {
        console.log('the ticket home', this.state)
        return (
            <div>
                <TicketTabs />
                <h2>Listing Tickets {this.state.tickets.length}</h2>
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
                        {this.state.tickets && this.state.tickets.map((ticket) => {
                            return (
                                <TicketTable key={ticket._id}
                                    code={ticket.code}
                                    customer={ticket.customer}
                                    department={ticket.department}
                                    priority={ticket.priority}
                                    message={ticket.message} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TicketHome