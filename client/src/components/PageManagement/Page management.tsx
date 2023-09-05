
import { Home } from "../Home/Home.tsx"
import { useState, useContext } from 'react';
import { Trips } from "../Trips/Trips.tsx"
import TripContextProvider from "./DataContex.tsx"
import PageManagementContextProvider from "./PageManagementContex.tsx"
import { pageManagementContex } from "../../PageManagementContex.tsx"




function PageManagement() {
    const PageManagementContex = useContext(pageManagementContex);
    if (!PageManagementContex) return null;
    const mode = PageManagementContex.mode
    return (
        <div>
            {mode ? <Home /> : null}
            {mode ? <Trips /> : null}
        </div>


    )
}

export default PageManagement
