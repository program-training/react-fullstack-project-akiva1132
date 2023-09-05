import React, { createContext, useState } from 'react';


interface PageManagementContexType {
    modeRoute: string
    setModeRoute: any
}

interface themeContextProviderProps {
    children: React.ReactNode;
}

export const RouteContex = createContext<PageManagementContexType | null>(null);

const RouteContexProvider: React.FC<themeContextProviderProps> = (props) => {
    const [modeRoute, setModeRoute] = useState<string>("Home");
    return (
        <RouteContex.Provider value={{ modeRoute, setModeRoute}}>
            {props.children}
        </RouteContex.Provider>
    );
};
export default RouteContexProvider;
