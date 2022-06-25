import { createContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { API_BASE_URL } from '../constants'

const SocketContext = createContext(null)

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    setSocket(io(API_BASE_URL))
  }, [])

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  )
}

export default SocketContext
