import { createContext, ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

import { usePersistedState } from '../hooks/usePersistedState';

type ThemeContextProps = {
  children: ReactNode;
}

type ThemeContextData = {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextData);

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [theme, toggleTheme] = usePersistedState();

  return (
    <ThemeContext.Provider value={{
      theme, 
      toggleTheme, 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
