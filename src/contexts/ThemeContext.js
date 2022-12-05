import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export function ThemeAppProvider({ children }) {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    try {
      const themeSelected = JSON.parse(localStorage.getItem('theme'))

      setTheme(themeSelected)
    } catch (err) {
      console.log(err)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])


  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleToggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}