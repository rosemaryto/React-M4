//CREATE ARRAY TO STORE EMPLOYEE INFO
const employees = [
    {
        id: 1,
        name: 'Rosemary To',
        ext: 1124,
        email: 'zak@vectacrop.com',
        title: 'Chief Executive Officer',
        dateHired: new Date('2018-08-15'),
        isEmployed: 'true',
    },
    {
        id: 3,
        name: 'Zak Ruvalcaba',
        ext: 1124,
        email: 'rto@vectacrop.com',
        title: 'Director of Sales',
        dateHired: new Date('2015-01-03'),
        isEmployed: 'true',
    }
]

//CLASS COMPONENT
class BorderWrap extends React.Component {
    render() {
        const borderStyle = {border: "3px solid silver", padding: 6}
        return (
            <div style={borderStyle}>
                {this.props.children}
            </div>
        )
    }
}

class EmployeeFilter extends React.Component {
    render() {
        return (<div>This is a placeholder for the filter</div>)
    }
}

class EmployeeTable extends React.Component {
    render() {
        const employeeRows = employees.map (employee =>
            <EmployeeRow key={employee.id} employee={employee}/>)
        return (
            <table className="bordered-table">                
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Extension</th>
                        <th>Email</th>
                        <th>Title</th>
                        <th>Date Hired</th>
                        <th>Currently Employed?</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeRows}
                </tbody>
            </table>
        )
    }
}

class EmployeeRow extends React.Component {
    render() {
        const employee = this.props.employee
        return (
        <tr>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.ext}</td>
            <td>{employee.email}</td>
            <td>{employee.title}</td>
            <td>{employee.dateHired.toDateString()}</td>
            <td>{employee.isEmployed ? 'Yes' : 'No'}</td>
        </tr>
        )
    }
}

class EmployeeAdd extends React.Component {
    render() {
        return (<div>This is a placeholder for the for to add a new employee</div>)
    }
}

//add instance of each component created above
class EmployeeList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BorderWrap>
                    <h1>Employee Management Application</h1>
                    <EmployeeFilter />
                    <hr />
                    <EmployeeTable />
                    <hr />
                    <EmployeeAdd />
                </BorderWrap>
            </React.Fragment>
        )
    }
}



//RENDER COMPONENT (takes 2 parameters)
ReactDOM.render(
    <React.StrictMode>
<EmployeeList />
    </React.StrictMode>
,document.getElementById('content'))