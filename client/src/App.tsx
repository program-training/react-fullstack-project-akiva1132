import './App.css'
import { Home } from "./components/Home/Home.tsx"
import { useState, useContext } from 'react';
import { Trips } from "./components/Trips/Trips.tsx"
import TripContextProvider from "./DataContex.tsx"
import PageManagementContextProvider from "./PageManagementContex.tsx"
import { pageManagementContex } from "./PageManagementContex.tsx"
import PageManagement from "./components/PageManagement/Page management.tsx"




function App() {
  const [mode, showingAllTrips] = useState<boolean>(false);
  // {const PageManagementContex = useContext(pageManagementContex)}
  return (
    <PageManagementContextProvider>
      <TripContextProvider>
        <div>
        <PageManagement />
        </div>
      </TripContextProvider>
    </PageManagementContextProvider>


  )
}

export default App
