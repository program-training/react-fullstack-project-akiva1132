import { useContext, useState, FormEvent } from 'react';
import { RouteContex } from "../../RouteContex"
import { TripContex } from "../../DataContex"
import { KeyContex } from "../../UserLoginComtex"
import "./newTrip.css"

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

export const NewTrip: React.FC = () => {
    const [confirmMessage, setConfirmMessage] = useState<string>("");
    const keyContex = useContext(KeyContex);
    if (!keyContex) return null;
    const key = keyContex.key.token
    const header = new Headers();
    header.append("authorization", key);
    header.append("Content-Type", "application/json");

    const [trip, setTrip] = useState<TriprContex | null | any>({ id: 9 });
    const routeContex = useContext(RouteContex);
    if (!routeContex) return null;
    const setModeRoute = routeContex.setModeRoute
    if (!trip) { return }
    const tripcontext = useContext(TripContex);
    if (!tripcontext) return null;
    const { setRefreshTrips } = tripcontext
    const { refreshTrips } = tripcontext
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        fetch("http://127.0.0.1:3000/api/trips/", { headers: header, method: "POST", body: JSON.stringify(trip), redirect: 'follow' })
            .then((data) => data.json())
            .then(result => {
                if (result.error) {
                    return setConfirmMessage(result.error);
                } setConfirmMessage("sucsses")
            })
            .catch(e => console.log(e)
            )
        setRefreshTrips(refreshTrips + 1)
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
                    <input
                        value={trip.name}
                        onChange={(e) => setTrip({ ...trip, ["name"]: e.target.value })}
                        className="input" type="text" placeholder="enter name" />
                    <input
                        value={trip.description}
                        onChange={(e) => setTrip({ ...trip, ["description"]: e.target.value })}
                        className="input" type="text" placeholder="enter description" />
                    <input
                        value={trip.destination}
                        onChange={(e) => setTrip({ ...trip, ["destination"]: e.target.value })}
                        className="input" type="text" placeholder="enter activities" />
                    <input
                        value={trip.endDate}
                        onChange={(e) => setTrip({ ...trip, ["endDate"]: e.target.value })}
                        className="input" type="text" placeholder="enter endDate" />
                    <input
                        value={trip.image}
                        onChange={(e) => setTrip({ ...trip, ["image"]: e.target.value })}
                        className="input" type="text" placeholder="enter image" />
                    <input
                        value={trip.price}
                        onChange={(e) => setTrip({ ...trip, ["price"]: e.target.value })}
                        className="input" type="text" placeholder="enter price" />
                    <input
                        value={trip.startDate}
                        onChange={(e) => setTrip({ ...trip, ["startDate"]: e.target.value })}
                        className="input" type="text" placeholder="enter startDate" />
                </div>
                <button >ok</button>
            </form>
        </div>

    );
}