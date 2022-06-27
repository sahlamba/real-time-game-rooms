import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SocketProvider } from './context/SocketContext'
import { UserProvider } from './context/UserContext'

import Home from './components/Home'
import RegisterUser from './components/RegisterUser'

const App = () => {
  return (
    <Router>
      <SocketProvider>
        <UserProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/user" element={<RegisterUser />} />
            {/* TODO: update Game element */}
            <Route exact path="/game/:gameCode" element={<Home />} />
          </Routes>
        </UserProvider>
      </SocketProvider>
    </Router>
  )
}

export default App
