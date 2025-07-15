import { createContext, useContext, useState } from "react";
import { darkTheme, lightTheme, type ThemeType } from "./themes";



interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({children}:{children:React.ReactNode}){
  const [themeName, setThemeName] = useState<'light'|'dark'>('light');

  const theme = themeName === 'light' ? lightTheme : darkTheme;
  
  const toggleTheme = () => {
    setThemeName((prev)=> (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if(!ctx) throw new Error('ThemeProvider가 필요합니다');
  return ctx;
}