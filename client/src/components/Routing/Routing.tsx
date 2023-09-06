import { Home } from "../Home/Home.tsx"
import { useContext } from 'react';
import { Trips } from "../Trips/Trips.tsx"
import {TripUpdate} from "../TripUpdate/TripUpdate.tsx"
import { RouteContex } from "../../RouteContex.tsx"
import { TripDetails } from "../TripDetail/TripDetail.tsx"
import {NewTrip} from "../NewTrip/NewTrip.tsx"
import {UserLogIn} from "../UserLogIn/UserLogIn.tsx"
import {Register} from "../Register/Register.tsx"


function Routing() {
    const routeContex = useContext(RouteContex);
    if (!routeContex) return null;
    const modeRoute = routeContex.modeRoute


    
    return (
        <div>
            {modeRoute === "Home" ? <Home /> : null}
            {modeRoute === "Trips" ? <Trips /> : null}
            {modeRoute === "newTrip" ? <NewTrip/> : null}
            {modeRoute === "Register" ? <Register/>: null}
            {modeRoute === "UserLogIn" ? <UserLogIn/>: null}
            {modeRoute.includes("TripUpdate") ? <TripUpdate id={
                modeRoute.slice(10)
            }/> : null}
            {modeRoute.includes("TripDetails") ? <TripDetails id={
                modeRoute.slice(11)
                } /> : null}
        </div>
    )
}

export default Routing
