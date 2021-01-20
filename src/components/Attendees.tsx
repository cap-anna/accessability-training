import React, { FormEvent, useEffect, useState } from "react"
import { useAttendees } from "./AttendeeHook"
import { NewAttendeeForm } from "./NewAttendeeForm"
import moment from 'moment'
const SimplexNoise = require('simplex-noise')

export type Attendee = {
    id: string,
    surname?: string,
    name?: string,
    street_number?: string,
    zipcode?: string,
    city?: string
}



export const useMove = () => {

    const [fakeMousePosition, setMousePosition] = useState({x: 0 , y: 0})
    const simplex = new SimplexNoise(Math.random)

    const handleMouseMove = () => {
        const ms = moment().valueOf()
        const s = 0.001 * (20 / 100);
        const noiseX = (simplex.noise3D(1, 0, s * ms) + 1) / 2;
        const noiseY = (simplex.noise3D(11, 0, s * ms) + 1) / 2;

        const random = 40/1000

        const innerWidth =  window.innerWidth
        const innerHeight = window.innerHeight
        
        const randX = simplex.noise3D(1, 0, random) * innerWidth * 0.1;
        const randY = simplex.noise3D(3, 0, random) * innerHeight * 0.1;

        const x = noiseX * innerWidth + randX
        const y = noiseY * innerHeight + randY

        setMousePosition({x: x, y: y})

    }
    return {
        x: fakeMousePosition.x,
        y: fakeMousePosition.y,
        handleMouseMove
    }
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