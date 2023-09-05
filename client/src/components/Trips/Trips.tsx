import { useContext } from 'react';
import {TripContex} from "../../DataContex"
import {Card} from "../Card/Card"
import "./trips.css"


export const Trips: React.FC<Props> = () => {
    const tripcontext = useContext(TripContex);
    if (!tripcontext) return null;
    const {trips} = tripcontext

if(trips){
    return (
        <div id='trips' >
            {trips.map((trip) => <Card key={trip.id} trip={trip}></Card>)}
        </div>
    );
}
};