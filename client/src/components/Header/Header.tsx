import { useContext } from "react";
import { RouteContex } from "../../RouteContex";
import "./Header.css"
import { BiLogIn } from "react-icons/bi"
import { AiOutlineUserAdd, AiOutlineHome, AiOutlinePhone } from "react-icons/Ai"
import { UserMode } from "../UserMode/UserMode";



export const Header: React.FC = () => {
    const routeContex = useContext(RouteContex);
    if (!routeContex) return null;
    const setModeRoute = routeContex.setModeRoute
    return (
        <div id="header">
            <div id="l">
                <button
                    onClick={() => setModeRoute("Home")}
                    className="buttonHome">
                    <div style={{ fontSize: "30px" }}><AiOutlineHome /></div>
                </button>
                <UserMode/>
            </div>
            <div id="r">
                <div  style={{ display: "flex", alignItems: "center", fontSize: "25px", padding: "5px" }}><AiOutlinePhone /><p  style={{ fontSize: "15px", padding: "0px 10px" }}>+972-584241132</p></div>
                <button
                    onClick={() => setModeRoute("Trips")} className="buttonHome">all trips
                </button>

                <button
                    onClick={() => { setModeRoute("UserLogIn") }}
                    className="buttonHome"><div style={{ fontSize: "30px" }}><BiLogIn /></div>
                </button>
            </div>
        </div>
    );
};