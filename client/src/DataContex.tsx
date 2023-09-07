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
    refreshTrips:number | null
}

interface tripContextProviderProps {
    children: React.ReactNode;
}
export const TripContex = createContext<tripContextType | null | any>(null);
const TripContextProvider: React.FC<tripContextProviderProps> = (props) => {
    const [refreshTrips, setRefreshTrips] = useState <number> (0);
    const [trips, getData] = useState<TriprContex[] | null>(null);
    useEffect(() => {
        fetch("http://127.0.0.1:3000/api/trips/")
            .then((data) => data.json())
            .then((data) => getData(data))
    }
        , [refreshTrips])
    return (
        <TripContex.Provider value={ {trips, refreshTrips, setRefreshTrips, getData} }>
            {props.children}
            </TripContex.Provider>
    );
};
export default TripContextProvider;
