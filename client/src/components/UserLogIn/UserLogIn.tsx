import { useContext, useState, FormEvent, useEffect } from 'react';
import { RouteContex } from "../../RouteContex"
import { KeyContex } from "../../UserLoginComtex"
import "./UserLogIn.css"

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
    responseObj: ObgRes
    error?: object

}
interface ObgRes{
    token: string
    user: object
}
const header = new Headers();
header.append("Content-Type", "application/json");

export const UserLogIn: React.FC = () => {
    const [confirmMessage, setConfirmMessage] = useState<string | any>("");
    const [trip, setTrip] = useState<TriprContex | null | any>({ email: "" });
    const routeContex = useContext(RouteContex);
    if (!routeContex) return null;
    const setModeRoute = routeContex.setModeRoute
    if (!trip) { return }
    const keyContex = useContext(KeyContex);
    if (!keyContex) return null;
    const setKey = keyContex.setKey
    const ShowingKey = (props: Props) => {
        if (props.message === undefined) {
            return setConfirmMessage(props.error);
        }
        setKey(props.responseObj.token);
        return (
            setConfirmMessage(props.message)
        )
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        fetch("http://127.0.0.1:3000/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(trip), redirect: 'follow' })
            .then(response => response.text())
            .then(result => ShowingKey(JSON.parse(result))
            )
            .catch(error => console.log('error', error));
    }
    return (
        <div id="details">
            {confirmMessage ? <div id="message">
                <div id='divtext'>{confirmMessage}</div>
                <div id='buttonsDiv'><button
                    onClick={() => setModeRoute("Home")}
                    style={{ backgroundColor: "blue" }}>Home Page</button>
                    <button
                        onClick={() => setModeRoute("Register")}
                        style={{ backgroundColor: "blue" }}>re-log in</button></div>
            </div> : null}
            <form onSubmit={handleSubmit} >
                <div id='forms'>
                    <div style={{ fontSize: "50px" }}>log in</div>
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