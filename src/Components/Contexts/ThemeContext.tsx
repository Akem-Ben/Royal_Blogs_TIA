import React, {createContext, useContext, useEffect, useState} from 'react';

interface ThemeContextInterface {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    toggleThemes: () => void | undefined | any;
}


export const ThemeContext = createContext<ThemeContextInterface | any>('')

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context

}

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<any | string>(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.style.setProperty('--background-color', theme === 'light' ? 'white' : '#181A2A')
    }, [theme]);

    const toggleThemes =  () => {
       return setTimeout(()=>{
            setTheme((prevTheme:any) => (prevTheme === 'light' ? 'dark' : 'light'));
        }, 300)
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleThemes }}>
            {children}
        </ThemeContext.Provider>
    );
};
