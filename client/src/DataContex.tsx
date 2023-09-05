import React, { createContext, useState, useEffect } from 'react';
interface TriprContex {
    "id": string
    "name": string
    "destination": string
    "startDate": string
    "endDate": string
    "description": string
    "price": number
    "image": string
    "activities": string[]
}
interface tripContextType {
    trips: TriprContex[] | null
    clickDelete:number | null
}

interface tripContextProviderProps {
    children: React.ReactNode;
}
export const TripContex = createContext<tripContextType | null >(null);
const TripContextProvider: React.FC<tripContextProviderProps> = (props) => {
    const [clickDelete, setClick] = useState <number> (0);
    const [trips, getData] = useState<TriprContex[] | null>(null);
    useEffect(() => {
        fetch("http://127.0.0.1:3000/api/trips/")
            .then((data) => data.json())
            .then((data) => getData(data))
    }
        , [clickDelete])
    return (
        <TripContex.Provider value={ {trips,clickDelete, setClick, getData} }>
            {props.children}
            </TripContex.Provider>
    );
};
export default TripContextProvider;
