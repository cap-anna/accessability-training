import React, { FC, FormEvent, useState } from "react"
import { Attendee } from "./Attendees"
const { v4: uuidv4 } = require('uuid');

interface iNewAttendeeForm {
    attendees: Attendee[],
    setAttendees: (attendees: Attendee[]) => void,
    setFormState: (val: boolean) => void
}

export const NewAttendeeForm:FC<iNewAttendeeForm> = ({attendees, setAttendees, setFormState}) => {
    const [currentAttendee, setCurrentAttendee] = useState<Attendee>({
        id: uuidv4(),
        surname: '',
        name: '',
        street_number: '',
        zipcode: '',
        city: ''
    })

    const cancelInput = (e: FormEvent) => {
        e.preventDefault()
        setCurrentAttendee({
            id: uuidv4(),
            surname: '',
            name: '',
            street_number: '',
            zipcode: '',
            city: ''
        })
        setFormState(false)
    }

    const saveAttendee = (e: FormEvent) => {
        e.preventDefault()
        console.log(currentAttendee)
        setAttendees([...attendees, currentAttendee])
        setCurrentAttendee({
            id: uuidv4(),
            surname: '',
            name: '',
            street_number: '',
            zipcode: '',
            city: ''
        })
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="surname" typeof="text">Surname: <br/>
            <input type="text" value={currentAttendee.surname} onChange={(e) => setCurrentAttendee({
                id: currentAttendee.id,
                surname: e.target.value,
                name: currentAttendee.name,
                street_number: currentAttendee.street_number,
                zipcode: currentAttendee.zipcode,
                city: currentAttendee.city
            })}/>
            </label> <br/>
            <label htmlFor="name" typeof="text">Name: <br/>
            <input type="text" value={currentAttendee.name} onChange={(e) => setCurrentAttendee({
                id: currentAttendee.id,
                surname: currentAttendee.surname,
                name: e.target.value,
                street_number: currentAttendee.street_number,
                zipcode: currentAttendee.zipcode,
                city: currentAttendee.city
            })}/> 
            </label> <br/>
            <label htmlFor="street-number" typeof="text">Street and house number: <br/>
            <input type="text" value={currentAttendee.street_number} onChange={(e) => setCurrentAttendee({
                id: currentAttendee.id,
                surname: currentAttendee.surname,
                name: currentAttendee.name,
                street_number: e.target.value,
                zipcode: currentAttendee.zipcode,
                city: currentAttendee.city
            })}/>
            </label> <br/>
            <label htmlFor="zipcode" typeof="text">Zipcode: <br/>
            <input type="number" value={currentAttendee.zipcode} onChange={(e) => setCurrentAttendee({
                id: currentAttendee.id,
                surname: currentAttendee.surname,
                name: currentAttendee.name,
                street_number: currentAttendee.street_number,
                zipcode: e.target.value.toString(),
                city: currentAttendee.city
            })}/>
            </label> <br/>
            <label htmlFor="city" typeof="text">City: <br/>
            <input type="text" value={currentAttendee.city} onChange={(e) => setCurrentAttendee({
                id: currentAttendee.id,
                surname: currentAttendee.surname,
                name: currentAttendee.name,
                street_number: currentAttendee.street_number,
                zipcode: currentAttendee.zipcode,
                city: e.target.value
            })}/>
            </label>
            <br/>
            <input type="button" value="Cancel" onClick={cancelInput} className="formBtn"/>
            <input type="button" value="Save" onClick={saveAttendee} className="formBtn"/>
        </form>
    )
}