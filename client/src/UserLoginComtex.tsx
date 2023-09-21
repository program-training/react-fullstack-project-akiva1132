import React, { createContext, useState } from 'react';

interface keyContexType {
    key: { token: string, name: string }
    setKey: any
}

interface keyContextProviderProps {
    children: React.ReactNode;
}
const storedToken = localStorage.getItem('res');

export const KeyContex = createContext<keyContexType | null>(null);

const KeyContexProvider: React.FC<keyContextProviderProps> = (props) => {
    const [key, setKey] = useState<object>({ token: storedToken ? JSON.parse(storedToken).token : "Home",
     name:"hello, " + (storedToken ? JSON.parse(storedToken).user.email.slice(0, JSON.parse(storedToken).user.email.indexOf('@')) : "guest") });
    return (
        <KeyContex.Provider value={{ key, setKey }}>
            {props.children}
        </KeyContex.Provider>
    );
};
export default KeyContexProvider;
