import { useContext } from "react";
import { pageManagementContex } from "../../PageManagementContex"
import "./Home.css"

export const Home: React.FC = () => {
    const PageManagementContex = useContext(pageManagementContex);
    if (!PageManagementContex) return null;
    const  setDeletPage  = PageManagementContex.setDeletPage
    return (
        <div >
            <button
                onClick={() => setDeletPage(true)} className="button">all trips
            </button>
            <button
                onClick={() => setDeletPage(false)}
                className="button">log in
            </button>
            <button className="button">registration</button>
        </div>
    );
};