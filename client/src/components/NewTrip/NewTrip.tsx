import { useContext, useState, FormEvent, useEffect } from 'react';
import { RouteContex } from "../../RouteContex"
import { TripContex } from "../../DataContex"
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
const header = new Headers();
header.append("authorization", "test-token");
header.append("Content-Type", "application/json");

export const NewTrip: React.FC = () => {
    const [trip, settrip] = useState<TriprContex | null | any>({id:9});
    // useEffect(() => {
    //     fetch(`http://127.0.0.1:3000/api/trips/${}`)
    //         .then((data) => data.json())
    //         .then((data) => {
    //             settrip(data);
    //         })
    // }
    //     , [])
        console.log(trip);
        
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
        fetch("http://127.0.0.1:3000/api/trips/", { headers: header, method: "POST", body: JSON.stringify(trip), redirect: 'follow' })
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
                        value={trip.description}
                        onChange={(e) => settrip({ ...trip, ["description"]: e.target.value })}
                        className="input" type="text" placeholder="enter description" />
                    <input
                        value={trip.destination}
                        onChange={(e) => settrip({ ...trip, ["destination"]: e.target.value })}
                        className="input" type="text" placeholder="enter activities" />
                    <input
                        value={trip.endDate}
                        onChange={(e) => settrip({ ...trip, ["endDate"]: e.target.value })}
                        className="input" type="text" placeholder="enter endDate" />
                    <input
                        value={trip.image}
                        onChange={(e) => settrip({ ...trip, ["image"]: e.target.value })}
                        className="input" type="text" placeholder="enter image" />
                        <input
                        value={trip.price}
                        onChange={(e) => settrip({ ...trip, ["price"]: e.target.value })}
                        className="input" type="text" placeholder="enter price" />
                        <input
                        value={trip.startDate}
                        onChange={(e) => settrip({ ...trip, ["startDate"]: e.target.value })}
                        className="input" type="text" placeholder="enter startDate" />
                </div>
                <button >ok</button>
            </form>
        </div>

    );
}