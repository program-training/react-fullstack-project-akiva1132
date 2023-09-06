import { useContext } from "react";
import { RouteContex } from "../../RouteContex"
import "./Home.css"

export const Home: React.FC = () => {
    const routeContex = useContext(RouteContex);
    if (!routeContex) return null;
    const setModeRoute = routeContex.setModeRoute
    return (
        <div id="divHome" >
            <button
                onClick={() => setModeRoute("Trips")} className="buttonHome">all trips
            </button>
            <button
                onClick={() => {setModeRoute("UserLogIn")}}
                className="buttonHome">log in
            </button>
            <button
            onClick={() => {setModeRoute("Register")}}

            className="buttonHome">registration</button>
        </div>
    );
};