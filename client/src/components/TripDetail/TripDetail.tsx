import { RouteContex } from "../../RouteContex"
import { useContext, useEffect, useState } from 'react';
import "./TripDetails.css"


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

export const TripDetails = (props: Props) => {
    const [trip, getData] = useState<TriprContex | null>(null);
    useEffect(() => {
        fetch(`http://127.0.0.1:3000/api/trips/${props.id}`)
            .then((data) => data.json())
            .then((data) => getData(data))
    }
        , [])
    const routeContex = useContext(RouteContex);
    if (!routeContex) return null;
    const setModeRoute = routeContex.setModeRoute
    if (!trip) { return }
    return (
        <div>
            <button onClick={() => setModeRoute("Trips")}>all trips</button>
            <div id="details">
                <div><img src={trip.image} alt="" /></div>
                <div>
                    <p>{trip.name}</p>
                    <p>{trip.activities}</p>
                    <p>{trip.description}</p>
                    <p>{trip.endDate}</p>
                    <p>{trip.startDate}</p>
                    <p>{trip.price}</p>
                </div>
            </div>
        </div>

    )
}