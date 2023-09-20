import { useContext } from 'react';
import { TripContex } from "../../DataContex"
import { RouteContex } from "../../RouteContex"
import { Card } from "../Card/Card"
import "./trips.css"


export const Trips: React.FC = () => {
    const routeContex = useContext(RouteContex);
    if (!routeContex) return null;
    const setModeRoute = routeContex.setModeRoute

    const tripcontext = useContext(TripContex);
    if (!tripcontext) return null;
    const { trips } = tripcontext

    if (trips) {
        return (
            <div>
                <div id='trips' >
                    {trips.map((trip) => <Card key={trip.id} trip={trip}></Card>)}
                </div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                    <button style={{ height: "200px", width: "200px" }} onClick={() => setModeRoute("newTrip")}>NewTrip</button>
                </div>
            </div>

        );
    }
};