import React, {createContext, useState, ReactNode, useContext} from 'react';

export interface TabContextProps {
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export interface TabProviderProps {
    children: ReactNode,
}

const TabContext = createContext<TabContextProps | undefined>(undefined);
export const useTabContext = () => {
    const context = useContext(TabContext);
    if (!context) {
        throw new Error('useTabContext must be used within a TabProvider');
    }
    return context;
};


const TabProvider: React.FC<TabProviderProps> = ({children}) => {
    const [activeTab, setActiveTab] = useState('form');

    return (
        <TabContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabContext.Provider>
    );
};

export  {TabContext,TabProvider}
