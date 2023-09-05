import { pageManagementContex } from "../../PageManagementContex.tsx"
import { useState, useContext } from 'react';








export const TripDetails = () => {
    const PageManagementContex = useContext(pageManagementContex);
    if (!PageManagementContex) return null;
    const  setDeletPage  = PageManagementContex.setDeletPage
    return(
        <div>
        <button onClick={() => setDeletPage(false)}>Detail</button>
        </div>
        
    )
}