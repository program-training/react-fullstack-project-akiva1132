import './App.css'
import TripContextProvider from "./DataContex.tsx"
import RouteContexProvider from "./RouteContex.tsx"
import KeyContexProvider from "./UserLoginComtex.tsx"
import Routing from "./components/Routing/Routing.tsx"




function App() {
  // {const PageManagementContex = useContext(pageManagementContex)}
  return (
    <TripContextProvider>
      <RouteContexProvider>
        <KeyContexProvider>
        <div id='app'>
          <Routing />
        </div>
        </KeyContexProvider>
      </RouteContexProvider>
    </TripContextProvider>

  )
}
export default App
