// import { response } from 'express'
// import React from 'react'
// import { Badge,Button,Card, Container, Row , Col, Alert } from 'react-bootstrap'
// import { useParams } from 'react-router-dom'

// export default class EmployeeEdit extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             employee: [],
//             alertVisible: false,
//             alertColor: 'success',
//             alertMessage: '',
//         }
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     componentDidMount() {
//         this.loadData()
//     }

//     loadData() {
//         const id = window.location.pathname.split('/')[2]
//         fetch(`/api/employees/${id}`)
//         .then(response => response.json())
//         .then(data => {
//             data.employee.dateHired = new Date(data.employee.dateHired)
//             this.setState({employee: data.employee})
//         })
//         .catch(err => (console.log(err)))
//     }

//     handleSubmit(e) {
//         e.preventDefault()
//         const form = document.forms.employeeUpdate
//         let id = form.id.value
//         let name = form.name.value
//         let extension = form.extension.value
//         let email = form.email.value
//         let title = form.title.value
//         let currentlyEmployed = form.currentlyEmployed.checked

//         let url = `/api/employees/${id}`
//         fetch(url, {
//             method: 'PATCH',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json;charset=UTF-8',
//             },
//             body: JSON.stringify({
//                 "name": name,
//                 "extension": extension,
//                 "email": email,
//                 "title": title,
//                 "currentlyEmployed": currentlyEmployed
//             }),
//         })
//         .then(response => response.json())
//         .then(data => {
//             this.setState({
//                 alertVisible: true,
//                 alertMessage: data.msg,
//             })
//         })
//     }

//     render() {
//         return (
//             <Card>
//             <Card.Header as="h5">Edit {this.state.employee.name}</Card.Header>
//             <Card.Body>
//             <Card.Text>
//                 <Container fluid>
//             <form action="employeeUpdate" onSubmit={this.handleSubmit}>
//                 ID:<br/>
//                 <input type="text" name="id" readOnly="readOnly" defaultValue={this.state.employee.id} /><br/>
//                 Name:<br/>
//                 <input type="text" name="name" defaultValue={this.state.employee.name} /><br/>
//                 Extension:<br/>
//                 <input type="text" name="extension" defaultValue={this.state.employee.extension} /><br/>
//                 Email:<br/>
//                 <input type="text" name="email" defaultValue={this.state.employee.email} /><br/>
//                 Title:<br/>
//                 <input type="text" name="title" defaultValue={this.state.employee.title} /><br/>
//                 Date Hired:<br/>
//                 <input type="text" name="dateHired" readOnly="readOnly" defaultValue={this.state.employee.dateHired} /><br/>
//                 Currently Employed:<br/>
//                 <input type="text" name="extension" defaultValue={this.state.employee.currentlyEmployed} /><br/>
//                 <Button type="submit" variant="primary" size="sm" className="my-3">Update Employee</Button>
//                 <Alert 
//                 variant={this.state.alertColor} show={this.state.alertVisible} onClose={() => this.setState({alertVisible: false})} dismissible>{this.state.alertMessage}
//                 </Alert>
//             </form>
//             </Container>
//             </Card.Text>
//             </Card.Body>
//         </Card>
//         )
//     }
// }