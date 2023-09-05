import React, { createContext, useState, useEffect } from 'react';






interface PageManagementContexType {
    mode: boolean
    setDeletPage: any
}

interface themeContextProviderProps {
    children: React.ReactNode;
}

export const pageManagementContex = createContext<PageManagementContexType | null>(null);

const PageManagementContextProvider: React.FC<themeContextProviderProps> = (props) => {
    const [mode, setDeletPage] = useState<boolean>(true);
    return (
        <pageManagementContex.Provider value={{ mode, setDeletPage}}>
            {props.children}
        </pageManagementContex.Provider>
    );
};
export default PageManagementContextProvider;
