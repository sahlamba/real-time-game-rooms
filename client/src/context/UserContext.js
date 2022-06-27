import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  uniqueNamesGenerator,
  adjectives,
  animals,
} from 'unique-names-generator'
import queryString from 'query-string'
import { useLocalStorageState } from '../hooks/useLocalStorageState'
import User from '../models/User'

const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [user, setUser] = useLocalStorageState('JottoUser', null)
  const [randomName] = useState(
    uniqueNamesGenerator({
      dictionaries: [adjectives, animals],
      separator: '-',
    }),
  )

  const redirectUrl = () => {
    if (location.search) {
      return queryString.parse(location.search).next
    }
    return '/'
  }

  useEffect(() => {
    if (user && user.id) {
      navigate(redirectUrl())
    }
  }, [user])

  const updateName = (event) => {
    setUser(event.target.value)
  }

  const persistUser = (event) => {
    event.preventDefault()
    // Transform to User model with UUID and overwrite
    setUser(new User(user && user !== '' ? user : randomName))
  }

  return (
    <UserContext.Provider value={{ user, randomName, updateName, persistUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
