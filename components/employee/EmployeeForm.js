import React, { useContext, useRef } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import "./Employees.css"

export default props => {
    const { addEmployees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)
    const employeeName = useRef("")
    const employeeLocation = useRef(0)
    const employeeIsManager = useRef("off")
    const employeeIsFullTime = useRef("off")
    const employeeHourlyRate = useRef("")

    const constructNewEmployee = () => {
        const locationId = parseInt(employeeLocation.current.value)
        const name = employeeName.current.value
        const hourlyRate = employeeHourlyRate.current.value

        if (name === "" || hourlyRate === "") {
            window.alert("Please fill out all text fields")
        } else if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addEmployees({
                name: employeeName.current.value,
                locationId: locationId,
                isManager: employeeIsManager.current.checked,
                isFullTime: employeeIsFullTime.current.checked,
                hourlyRate: employeeHourlyRate.current.value
            })
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <div className="form-group">
                <label htmlFor="employeeName">Employee name</label>
                <input
                    type="text"
                    id="employeeName"
                    ref={employeeName}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Employee name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="location">Assign to location</label>
                <select
                    defaultValue=""
                    name="location"
                    ref={employeeLocation}
                    id="employeeLocation"
                    className="form-control"
                >
                    <option value="0">Select a location</option>
                    {locations.map(e => (
                        <option key={e.id} value={e.id}>
                            {e.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="isManager">Is the employee a manager?</label>
                <input
                    type="checkbox"
                    id="isManager"
                    ref={employeeIsManager}
                    autoFocus
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="isFullTime">Does the employee work full time?</label>
                <input
                    type="checkbox"
                    id="isFullTime"
                    ref={employeeIsFullTime}
                    autoFocus
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="hourlyRate">What is the employee's hourly rate?</label>
                <input
                    type="text"
                    id="hourlyRate"
                    ref={employeeHourlyRate}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="15"
                />
            </div>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewEmployee()
                    }
                }
                className="btn btn-primary">
                Save Employee
</button>
        </form>
    )
}