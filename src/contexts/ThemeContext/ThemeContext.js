import React, { createContext, useState } from 'react';

export const DarkLightContext = createContext();

const ThemeContext = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <DarkLightContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </DarkLightContext.Provider>
    );
};

export default ThemeContext;