/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState } from "react";

type ThemeType = "Light" | "Dark";

interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "Light",
    toggleTheme: () => { }
});

export const useThemeContext = () => useContext<ThemeContextType>(ThemeContext);


export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<ThemeType>("Light")

    const toggleTheme = () => {
        setTheme((prev) => prev === "Light" ? 'Dark' : "Light")
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};

