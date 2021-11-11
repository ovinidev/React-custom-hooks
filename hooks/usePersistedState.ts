import { useState, useEffect } from 'react';
import { DefaultTheme } from 'styled-components';
import { dark } from '../styles/themes/dark';
import { light } from '../styles/themes/light';

type Props = [
  theme: DefaultTheme,
  toggleTheme: () => void,
];

function usePersistedState(): Props {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  useEffect(() => {
    (() => {
      const storageValue = localStorage.getItem('local@theme');
      setTheme(storageValue === 'light' ? light : dark);

      if (storageValue === null) {
        setTheme(light);
        localStorage.setItem('datacoin@theme', 'light');
      }
    })();
  }, []);

  function toggleTheme() {
    const newThemeName = theme === light ? 'dark' : 'light';
    localStorage.setItem('local@theme', newThemeName);
    setTheme(newThemeName === 'dark' ? dark : light);
  }

  return [theme, toggleTheme];
}

export { usePersistedState };
