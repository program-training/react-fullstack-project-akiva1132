import { useContext, useState, FormEvent, useEffect } from 'react';
import { RouteContex } from "../../RouteContex"
import { TripContex } from "../../DataContex"
import { Card } from "../Card/Card"
import "./Register.css"

interface TriprContex {
    "id": string
    "name": string
    "destination": string
    "startDate": string
    "endDate": string
    "description": string
    "price": number
    "image": string
    "activities": string[]
}

interface Props {
    message: string
    responseObj: object
}
const header = new Headers();
header.append("Content-Type", "application/json");

export const Register: React.FC = () => {
    const [confirmMessage, setConfirmMessage] = useState("");
    const [trip, setTrip] = useState<TriprContex | null | any>({ email: "" });
    const routeContex = useContext(RouteContex);
    if (!routeContex) return null;
    const setModeRoute = routeContex.setModeRoute
    if (!trip) { return }
    const ShowingKey = (props: Props) => {
        console.log(props.message);
        return (
            setConfirmMessage(props.message)
        )
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        fetch("http://127.0.0.1:3000/api/auth/Register", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(trip), redirect: 'follow' })
            .then(response => response.text())
            .then(result => ShowingKey(JSON.parse(result))
            )
            .catch(error => console.log('error', error));
    }
    return (
        <div id="details">
            {confirmMessage ? <div id="message">
                <div id='divtext'>{confirmMessage}</div>
                <button
                onClick={() => setModeRoute("Home")}
                 style={{backgroundColor:"blue"}}>Home Page</button>
            </div> : null}
            <form onSubmit={handleSubmit} >
                <div id='forms'>
                    <div style={{ fontSize: "50px" }}>Register</div>
                    <input
                        value={trip.email}
                        onChange={(e) => setTrip({ ...trip, ["email"]: e.target.value })}
                        className="input" type="text" placeholder="enter enail" />
                    <input
                        value={trip.password}
                        onChange={(e) => setTrip({ ...trip, ["password"]: e.target.value })}
                        className="input" type="text" placeholder="enter password" />
                </div>
                <button >ok</button>
            </form>
        </div>

    );
}