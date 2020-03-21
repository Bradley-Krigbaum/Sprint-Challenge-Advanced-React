import { useEffect, useState } from 'react'

export default () => {
  const [theme, setTheme] = useState('original')

  const switchTheme = () => {
    if (theme === 'original') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('theme', 'original')
      setTheme('original')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])

  return [
    theme,
    switchTheme,
  ]
}