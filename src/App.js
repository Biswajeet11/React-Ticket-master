import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import CustomerList from './components/customer/List';
import DepartmentList from './components/department/List';
import CustomerNew from './components/customer/New';
import EmployeesList from './components/employees/List';
import EmployeeNew from './components/employees/New';
import EmployeeShow from './components/employees/EmployeeShow';
function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Ticket Master</h1>
        <Link to='/'>Home </Link>
        <Link to='/customers'>Customers</Link>
        <Link to='/departments'>Departments</Link>
        <Link to='/employees'>Employees</Link>

        <Route path='/customers' exact={true} component={CustomerList} />
        <Route path='/departments' component={DepartmentList} />
        <Route path='/customers/new' component={CustomerNew} />
        <Route path='/employee/new' component={EmployeeNew} />
        <Route path='/employees' exact={true} component={EmployeesList} />
        <Route path='/employees/:id' component={EmployeeShow} />
      </div>
    </BrowserRouter>
  );
}

export default App;
