import { useContext, useState, FormEvent, useEffect } from 'react';
import { RouteContex } from "../../RouteContex"
import { TripContex } from "../../DataContex"
import "./NewTrip.css"

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
    id: string
}
const header = new Headers();
header.append("authorization", "test-token");
header.append("Content-Type", "application/json");

export const TripUpdate = (props: Props) => {
    const [trip, settrip] = useState<TriprContex | null | any>(null);
    useEffect(() => {
        fetch(`http://127.0.0.1:3000/api/trips/${props.id}`)
            .then((data) => data.json())
            .then((data) => {
                settrip(data);
            })
    }
        , [])
    const routeContex = useContext(RouteContex);
    if (!routeContex) return null;
    const setModeRoute = routeContex.setModeRoute
    if (!trip) { return }
    const tripcontext = useContext(TripContex);
    if (!tripcontext) return null;
    const { setClick } = tripcontext
    const { clickDelete } = tripcontext
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        fetch(`http://127.0.0.1:3000/api/trips/${props.id}`, { headers: header, method: "PUT", body: JSON.stringify(trip), redirect: 'follow' })
            .then((data) => data.json())
            .then((a) => a)
        setClick(clickDelete + 1)
        setModeRoute("Trips")
    }

    return (
        <div id="details">
            <form onSubmit={handleSubmit} >
                <div id='forms'>
                    <input
                        value={trip.id}
                        onChange={(e) => settrip({ ...trip, ["id"]: e.target.value })}
                        className="input" type="text" placeholder="enter id" />
                    <input
                        value={trip.activities}
                        onChange={(e) => settrip({ ...trip, ["activities"]: e.target.value })}
                        className="input" type="text" placeholder="enter activities" />
                    <input
                        value={trip.description}
                        onChange={(e) => settrip({ ...trip, ["description"]: e.target.value })}
                        className="input" type="text" placeholder="enter description" />
                    <input
                        value={trip.name}
                        onChange={(e) => settrip({ ...trip, ["name"]: e.target.value })}
                        className="input" type="text" placeholder="enter name" />
                </div>
                <button >ok</button>
            </form>
        </div>

    );
}