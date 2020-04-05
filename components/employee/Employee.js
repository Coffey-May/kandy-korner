import React from "react"
import "./Employees.css"

export default ({ employee, location }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        {/* <div className="employee__location">{location.name}</div> */}
        <div className="employee__manager">{employee.isManager ? "Manager" : "Employee"}</div>
        <div className="employee__fulltime">{employee.isFullTime ? "Full-time" : "Part-time"}</div>
        <div className="employee__hourlyrate">${employee.hourlyRate}/hr</div>
    </section>
)