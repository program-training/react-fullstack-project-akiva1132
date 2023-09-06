import React, { createContext, useState } from 'react';

interface keyContexType {
    key: string
    setKey: any
}

interface keyContextProviderProps {
    children: React.ReactNode;
}

export const KeyContex = createContext<keyContexType | null>(null);

const KeyContexProvider: React.FC<keyContextProviderProps> = (props) => {
    const [key, setKey] = useState<string>("Home");
    return (
        <KeyContex.Provider value={{ key, setKey}}>
            {props.children}
        </KeyContex.Provider>
    );
};
export default KeyContexProvider;
