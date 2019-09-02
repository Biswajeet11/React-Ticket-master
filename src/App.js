import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import CustomerList from './components/customer/List';
import DepartmentList from './components/department/List';
import CustomerNew from './components/customer/New';
import EmployeesList from './components/employees/List';
import EmployeeNew from './components/employees/New';
import EmployeeShow from './components/employees/EmployeeShow';
import CustomerEdit from './components/customer/Edit';
import CustomerShow from './components/customer/Show';
import TicketHome from './components/tickets/Ticket-home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Ticket Master</h1>
        <Link to="/">Home</Link> |
        <Link to="/customers">Customers</Link> |
        <Link to="/departments">Departments</Link> |
        <Link to="/employees">Employees</Link> |
        <Link to="/tickets">Tickets</Link>

        <Switch>
          <Route path="/customers" component={CustomerList} exact={true} />
          <Route path="/customers/new" component={CustomerNew} exact={true} />
          <Route path="/customers/edit/:id" component={CustomerEdit} />
          <Route path="/customers/:id" component={CustomerShow} />
          <Route path="/departments" component={DepartmentList} />
          <Route path="/employees" component={EmployeesList} />
          <Route path="/employees/:id" component={EmployeeShow} />
          <Route path="/employees/new" component={EmployeeNew} />
          <Route path="/tickets" component={TicketHome} />
        </Switch>


      </div>
    </BrowserRouter>
  );
}

export default App;



