import React from 'react'
import { useNavigate } from 'react-router-dom'
import { API_BASE_URL } from '../constants'
import { usePlayerContext } from '../context/PlayerContext'
import GameSettings from '../models/GameSettings'

const Home = () => {
  const navigate = useNavigate()

  const { player } = usePlayerContext()

  const createGame = async () => {
    try {
      const settings = new GameSettings(2, 4)

      const res = await fetch(`${API_BASE_URL}/api/game`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ player, settings }),
      })
      const { ok, game, message } = await res.json()
      if (!ok) {
        console.error(message)
        return
      }
      navigate(`/game/${game.id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <React.Fragment>
      <h1>
        Welcome to Jotto, {player ? player.name : 'player not registered'}!
      </h1>
      <button onClick={createGame}>Create game</button>
    </React.Fragment>
  )
}

export default Home
