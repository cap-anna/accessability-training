import { useState } from "react"
import { Attendee } from "./Attendees"

type AttendeeHookResponse = {
    attendees: Attendee[],
    setAttendees: React.Dispatch<React.SetStateAction<Attendee[]>>,
    showForm: boolean,
    setFormState: React.Dispatch<React.SetStateAction<boolean>>
}

export const useAttendees = (() : AttendeeHookResponse => {
    const[attendees, setAttendees] = useState<Attendee[]>([])
    const [showForm, setFormState] = useState<boolean>(false)

    return {attendees, setAttendees, showForm, setFormState}
})