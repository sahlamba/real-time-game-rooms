import { useContext } from 'react'
import SocketContext from './context/SocketContext'

const App = () => {
  const socket = useContext(SocketContext)
  console.log({ socket })

  return <div>Jotto!</div>
}

export default App
