import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSocketContext } from '../context/SocketContext'
import { useUserContext } from '../context/UserContext'

const Home = () => {
  const navigate = useNavigate()
  const { socket } = useSocketContext()
  const { user } = useUserContext()

  useEffect(() => {
    if (!user || !user.id) {
      navigate('/user?next=/')
    }
  }, [])

  return (
    <React.Fragment>
      <h1>Welcome to Jotto, {user ? user.name : 'user not registered'}!</h1>
      {socket ? <pre>Connected with socket ID: {socket.id}</pre> : null}
    </React.Fragment>
  )
}

export default Home
