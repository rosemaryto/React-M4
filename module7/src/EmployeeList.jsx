import React from 'react'
import { Badge } from 'react-bootstrap'
import { useLocation, Link } from 'react-router-dom'
import EmployeeAdd from './EmployeeAdd.jsx'
import EmployeeFilter from './EmployeeFilter.jsx'


function EmployeeTable(props) {
    //GET URL
    const {search} = useLocation()
    //GET PARAMETERS FROM URL
    const query = new URLSearchParams(search)
    //GET 'EMPLOYED' PARAMETER
    const q = query.get('employed')
    
    const employeeRows = props.employees
    //{q tru} 
        .filter(employee => (q ? String(employee.currentlyEmployed) === q : true))
        .map (employee =>
        <EmployeeRow 
        key={employee._id} 
        employee={employee}
        deleteEmployee={props.deleteEmployee} />)

    return (
        <table className="bordered-table">        
            <thead>
                <tr>
                    <th>Action</th>
                    <th>Name</th>
                    <th>Extension</th>
                    <th>Email</th>
                    <th>Title</th>
                    <th>Date Hired</th>
                    <th>Currently Employed?</th>
                    <th>Delete Employee</th>
                </tr>
            </thead>
            <tbody>
                {employeeRows}
            </tbody>
        </table>
    )
}


function EmployeeRow(props) {
    function onDeleteClick() {
        props.deleteEmployee(props.employee._id)
    }
    return (
        <tr>
            <td><Link to={`/edit/${props.employee._id}`}>Edit</Link></td>
            <td>{props.employee.name}</td>
            <td>{props.employee.extension}</td>
            <td>{props.employee.email}</td>
            <td>{props.employee.title}</td>
            <td>{props.employee.dateHired.toDateString()}</td>
            <td>{props.employee.currentlyEmployed ? 'Yes' : 'No'}</td>
            <td><button onClick={onDeleteClick}>DELETE</button></td>
            
        </tr>
    )
}

export default class EmployeeList extends React.Component {
    constructor() {
        super()
        this.state = { employees: [] }
        this.createEmployee = this.createEmployee.bind(this)
        this.deleteEmployee = this.deleteEmployee.bind(this)
    } 
    componentDidMount() { 
        this.loadData()
    }
    loadData() {
        fetch('/api/employees')
        .then(response => response.json())
        .then(data => {
            console.log('Total count of employees:', data.count)
            data.employees.forEach(employee => {
                employee.dateHired = new Date(employee.dateHired)
            })
            this.setState({employees: data.employees})
        })
        .catch(err => {console.log(err)})
    }
    createEmployee(employee) {
        fetch('/api/employees', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(employee), 
        })
        .then(response => response.json())
        .then(newEmployee => {
            newEmployee.employee.dateHired = new Date(newEmployee.employee.dateHired)
            const newEmployees = this.state.employees.concat(newEmployee.employee)
            this.setState({employees: newEmployees})
            console.log('Total count of employees:', newEmployees.length)
        }) 
        .catch(err => {console.log(err)})
    }
    deleteEmployee(id) {
        fetch(`/api/employees/${id}`,{method: 'DELETE'})
        .then(response => {
            if (!response.ok) {
                console.log('Failed to delete employee.')
            } else {
                this.loadData()
            }
        })
    }
    render() {
        return (
            <React.Fragment>
                    <h1><Badge bg="secondary">Employee Management Application</Badge></h1>
                    <EmployeeFilter />
                    <hr />
                    <EmployeeTable employees={this.state.employees} deleteEmployee={this.deleteEmployee}/>
                    <hr />
                    <EmployeeAdd createEmployee={this.createEmployee}/>
            </React.Fragment>
        )
    }
}


