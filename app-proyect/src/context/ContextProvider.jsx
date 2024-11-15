//uso de contexto y estado
import { useState, useContext } from 'react';

//contexto
import { inventaryContext } from './inventaryContext';

export const ThemeProvider = ({ children }) => {
    //estado para saber el tema actual
    const [isDarkMode, setIsDarkMode] = useState(false); //estado inicial light

    //toggle que alterna el tema
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode); //cambia el estado
    };

    return (
        <inventaryContext.Provider value={{
                isDarkMode, 
                toggleTheme
            }}
        >
            <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
                {children}
            </div>
        </inventaryContext.Provider>
    );
};

//hook personalizado para consumir el tema
export const useTheme = () => useContext(inventaryContext);