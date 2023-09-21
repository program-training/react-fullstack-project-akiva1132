import { useContext } from "react";
import { RouteContex } from "../../RouteContex"
import "./Home.css"

export const Home: React.FC = () => {
    const routeContex = useContext(RouteContex);
    if (!routeContex) return null;
    const setModeRoute = routeContex.setModeRoute
    return (
        <div id="divHome" >
            <img id="backroundImg" src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=826&t=st=1695301871~exp=1695302471~hmac=67ad20413e51443d46abd94942f167b608456758175a8e9280acfebb07b81cee" alt="backround" />
            {/* <button
                onClick={() => setModeRoute("Trips")} className="buttonHome">all trips
            </button>
            <button
                onClick={() => {setModeRoute("UserLogIn")}}
                className="buttonHome">log in
            </button>
            <button
            onClick={() => {setModeRoute("Register")}}
            className="buttonHome">registration</button> */}
        </div>
    );
};