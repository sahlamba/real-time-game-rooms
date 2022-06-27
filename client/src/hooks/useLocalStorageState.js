import { useEffect, useState } from 'react'

export const useLocalStorageState = (key, defaultValue) => {
  // Load persisted value if it exists
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      // eslint-disable-next-line
      console.error({ error })
      return defaultValue
    }
  })

  useEffect(() => {
    if (storedValue) {
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } else {
      // Clear local storage
      window.localStorage.removeItem(key)
    }
  }, [storedValue])

  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      return true
    } catch (error) {
      // eslint-disable-next-line
      console.log({ error })
      return false
    }
  }

  const clearValue = () => {
    try {
      setStoredValue(defaultValue)
      return true
    } catch (error) {
      // eslint-disable-next-line
      console.error({ error })
      return false
    }
  }

  return [storedValue, setValue, clearValue]
}
