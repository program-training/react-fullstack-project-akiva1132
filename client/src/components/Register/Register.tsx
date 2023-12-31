import { useContext, useState, FormEvent } from 'react';
import { RouteContex } from "../../RouteContex"
import { KeyContex } from "../../UserLoginComtex"
import "./Register.css"

interface User {
    "id"?: string
    "email": string
    "password"?: string
}

interface Props {
    message: string
    responseObj: object
}

interface PropsLogIn {
    message: string
    responseObj: ObgRes
    error?: object
}
interface ObgRes {
    token: string
    user: object
}


const header = new Headers();
header.append("Content-Type", "application/json");

export const Register: React.FC = () => {
    const keyContex = useContext(KeyContex);
    if (!keyContex) return null;
    const setKey = keyContex.setKey

    const [confirmMessage, setConfirmMessage] = useState("");
    const [trip, setTrip] = useState<User>({ email: "" });
    const routeContex = useContext(RouteContex);
    if (!routeContex) return null;
    const setModeRoute = routeContex.setModeRoute
    if (!trip) { return }
    const ShowingKey = (props: Props) => {
        return (
            setConfirmMessage(props.message)
        )
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        fetch("http://127.0.0.1:3000/api/auth/Register", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(trip), redirect: 'follow' })
            .then(response => response.text())
            .then(result => {
                if (JSON.parse(result).error) {
                    return setConfirmMessage(JSON.parse(result).error);
                } ShowingKey(JSON.parse(result))
                handleSubmitLogIn()
            })
            .catch(error => console.log('error', error));
    }
    const logIn = (props: PropsLogIn) => {
        localStorage.setItem('res', JSON.stringify({ user: props.responseObj.user, token: props.responseObj.token }))
        setKey({ token: props.responseObj.token, name: "hello, " + props.responseObj.user.email });

    }
    const handleSubmitLogIn = (): void => {
        fetch("http://127.0.0.1:3000/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(trip), redirect: 'follow' })
            .then(response => response.text())
            .then(result => logIn(JSON.parse(result))
            )
            .catch(error => console.log('error', error));
    }

    return (
        <div id="details">
            {confirmMessage ? <div id="message">
                <div id='divtext'>{confirmMessage}</div>
                <div id='buttonsDiv'>
                    <button
                        onClick={() => setModeRoute("Home")}
                        style={{ backgroundColor: "blue" }}>Home Page</button>
                    {confirmMessage === "User already exists" ? <button
                        onClick={() => setConfirmMessage("")}
                        style={{ backgroundColor: "blue" }}>re-Register</button> : null}
                </div>
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