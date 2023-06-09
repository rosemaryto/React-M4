//CREATE ARRAY TO STORE EMPLOYEE INFO
const employees = [{
  id: 1,
  name: 'Rosemary To',
  ext: 1124,
  email: 'zak@vectacrop.com',
  title: 'Chief Executive Officer',
  dateHired: new Date('2018-08-15'),
  isEmployed: 'true'
}, {
  id: 3,
  name: 'Zak Ruvalcaba',
  ext: 1124,
  email: 'rto@vectacrop.com',
  title: 'Director of Sales',
  dateHired: new Date('2015-01-03'),
  isEmployed: 'true'
}];

//CLASS COMPONENT
class BorderWrap extends React.Component {
  render() {
    const borderStyle = {
      border: "3px solid silver",
      padding: 6
    };
    return /*#__PURE__*/React.createElement("div", {
      style: borderStyle
    }, this.props.children);
  }
}
class EmployeeFilter extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for the filter");
  }
}
class EmployeeTable extends React.Component {
  render() {
    const employeeRows = employees.map(employee => /*#__PURE__*/React.createElement(EmployeeRow, {
      key: employee.id,
      employee: employee
    }));
    return /*#__PURE__*/React.createElement("table", {
      className: "bordered-table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Extension"), /*#__PURE__*/React.createElement("th", null, "Email"), /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Date Hired"), /*#__PURE__*/React.createElement("th", null, "Currently Employed?"))), /*#__PURE__*/React.createElement("tbody", null, employeeRows));
  }
}
class EmployeeRow extends React.Component {
  render() {
    const employee = this.props.employee;
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, employee.id), /*#__PURE__*/React.createElement("td", null, employee.name), /*#__PURE__*/React.createElement("td", null, employee.ext), /*#__PURE__*/React.createElement("td", null, employee.email), /*#__PURE__*/React.createElement("td", null, employee.title), /*#__PURE__*/React.createElement("td", null, employee.dateHired.toDateString()), /*#__PURE__*/React.createElement("td", null, employee.isEmployed ? 'Yes' : 'No'));
  }
}
class EmployeeAdd extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for the for to add a new employee");
  }
}

//add instance of each component created above
class EmployeeList extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BorderWrap, null, /*#__PURE__*/React.createElement("h1", null, "Employee Management Application"), /*#__PURE__*/React.createElement(EmployeeFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeAdd, null)));
  }
}

//RENDER COMPONENT (takes 2 parameters)
ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(EmployeeList, null)), document.getElementById('content'));