import "./UserMode.css"
import { useContext, useState } from 'react';
// import { TripContex } from "../../DataContex"
// import { RouteContex } from "../../RouteContex"
import { KeyContex } from "../../UserLoginComtex"
import { CgProfile } from "react-icons/cg"


export const UserMode: React.FC = () => {
    const storedToken = localStorage.getItem('res');
    console.log(storedToken ? JSON.parse(storedToken) : "null"); 
    const [confirmMessage, setConfirmMessage] = useState<boolean>(false);
    const routeContex = useContext(KeyContex);
    if (!routeContex) return null;
    const name = routeContex.key.name
    return (
        <div id="userMode">
            <button  onClick={() => setConfirmMessage(true)}><CgProfile/></button>
            <p id="userName">{name}</p>
            {confirmMessage ? <div id="logOut">
                {storedToken ? JSON.parse(storedToken).email : "null"}
            </div> : null}
        </div>
    );
};
