import "./CArd.css"
import { useContext } from 'react';
import { TripContex } from "../../DataContex"
import { pageManagementContex } from "../../PageManagementContex"
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
const header = new Headers();
header.append("authorization", "test-token");
export const Card: React.FC<Props> = (props: Props) => {
    const tripcontext = useContext(TripContex);
    const PageManagementContex = useContext(pageManagementContex);
    if (!PageManagementContex) return null;
    const  setDeletPage  = PageManagementContex.setDeletPage


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
                        .then(() => setClick(clickDelete + 1))
                }>delete</button>
                <button onClick={() => setDeletPage(false)}
                >Detail</button>
            </div>

        </div>
    );
};