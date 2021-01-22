import React, { FormEvent } from "react"
import { useAttendees } from "./AttendeeHook"
import { NewAttendeeForm } from "./NewAttendeeForm"


export type Attendee = {
    id: string,
    surname?: string,
    name?: string,
    street_number?: string,
    zipcode?: string,
    city?: string
}

export const Attendees = () => {

    const {attendees, setAttendees, showForm, setFormState} = useAttendees()

    const toggleForm = (e: FormEvent) => {
        e.preventDefault()
        setFormState(!showForm)
    }

    const createAttendeeList = (attendees: Attendee[]) => attendees && attendees.map(attendee => {
        return (<tr key={attendee.id}>
            <td>{attendee.surname}</td>
            <td>{attendee.name}</td>
            <td>{attendee.street_number}</td>
            <td>{attendee.zipcode}</td>
            <td>{attendee.city}</td>
        </tr>)
    })

    return (
        <div>
            <button onClick={toggleForm} className="btnAttendee">Add new attendee</button>
            {showForm && <NewAttendeeForm attendees={attendees} 
                setAttendees={setAttendees} setFormState={setFormState}></NewAttendeeForm>}
            <h3>Accessbility Training Attendees</h3>
            {attendees.length > 0 && <table className="attendeeTable">
                <thead>
                    <tr>
                        <th>Surname</th>
                        <th>Name</th>
                        <th>Street and house number</th>
                        <th>Zipcode</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {createAttendeeList(attendees)}
                </tbody>
            </table>}
        </div>
        
    )
}