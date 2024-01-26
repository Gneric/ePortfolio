'use client'
import Porfolio from '@/pages/portfolio'
import { saveThemeToLocalStorage, getThemeFromLocalStorage } from '../utils/themeUtils';
import { useEffect, useState } from 'react'

export default function Home() {
  const [theme, setTheme] = useState(getThemeFromLocalStorage);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    saveThemeToLocalStorage(newTheme);
  };

  useEffect(() => {
    console.log('Toggle theme');
  }, [theme]);

  return <Porfolio />
}