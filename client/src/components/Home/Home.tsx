import { useContext } from "react";
import { RouteContex } from "../../RouteContex"
import "./Home.css"

export const Home: React.FC = () => {
    const routeContex = useContext(RouteContex);
    if (!routeContex) return null;
    const setModeRoute = routeContex.setModeRoute
    return (
        <div >
            <button
                onClick={() => setModeRoute("Trips")} className="button">all trips
            </button>
            <button
                onClick={() => {setModeRoute("UserLogIn")}}
                className="button">log in
            </button>
            <button
            onClick={() => {setModeRoute("Register")}}

            className="button">registration</button>
        </div>
    );
};