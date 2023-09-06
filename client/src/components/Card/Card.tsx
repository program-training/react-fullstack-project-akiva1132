import "./CArd.css"
import { useContext, useState } from 'react';
import { TripContex } from "../../DataContex"
import { RouteContex } from "../../RouteContex"
import { KeyContex } from "../../UserLoginComtex"
interface Trip {
    id: string
    name: string
    destination: string
    startDate: string
    endDate: string
    description: string
    price: number
    image: string
    activities: string[]
}
interface Props {
    trip: Trip
}

export const Card: React.FC<Props> = (props: Props) => {
    const [authorizationMessage, setAuthorizationMessage] = useState<boolean>(false);
    const keyContex = useContext(KeyContex);
    if (!keyContex) return null;
    const key = keyContex.key

    const header = new Headers();
    header.append("authorization", key);

    const routeContex = useContext(RouteContex);
    if (!routeContex) return null;
    const setModeRoute = routeContex.setModeRoute
    const tripcontext = useContext(TripContex);
    if (!tripcontext) return null;
    const { setClick } = tripcontext
    const { clickDelete } = tripcontext
    return (
        <div className="card">
            {props.trip.name}

            <div id="buttons">
                <img className="img" src={props.trip.image} alt="" />
                <button onClick={() =>
                    fetch(`http://127.0.0.1:3000/api/trips/${props.trip.id}`, { headers: header, method: 'DELETE' })
                        .then(data => data.json())
                        .then((data) => {
                            if (data.error) { setAuthorizationMessage(true), setTimeout(() => setAuthorizationMessage(false), 400) }
                            setClick(clickDelete + 1)
                        }
                        )
                }>delete</button>
                {authorizationMessage ? <div style={{ backgroundColor: "red" }}>not authorization</div> : null}
                <button onClick={() => setModeRoute("TripUpdate" + props.trip.id)}>TripUpdate</button>
                <button onClick={() => setModeRoute(`TripDetails${props.trip.id}`)}
                >Detail</button>
            </div>

        </div>
    );
};