import './App.css'
import TripContextProvider from "./DataContex.tsx"
import RouteContexProvider from "./RouteContex.tsx"
import Routing from "./components/Routing/Routing.tsx"




function App() {
  // {const PageManagementContex = useContext(pageManagementContex)}
  return (
    <TripContextProvider>
      <RouteContexProvider>
        <div>
          <Routing />
        </div>
      </RouteContexProvider>
    </TripContextProvider>

  )
}
export default App
