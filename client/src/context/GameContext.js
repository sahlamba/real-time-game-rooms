import React, { createContext, useContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { useToast } from '@chakra-ui/react'

import { API_BASE_URL } from '../constants'
import { usePlayerContext } from './PlayerContext'

import { getGameById } from '../utils/apiClient'
import { notify } from '../utils/ui'

const GameContext = createContext(null)

export const GameProvider = ({ children }) => {
  const { player } = usePlayerContext()

  const [socket, setSocket] = useState(null)
  const [game, setGame] = useState(null)
  const [loadingGame, setLoadingGame] = useState({
    status: true,
    message: '',
  })
  const [joiningGame, setJoiningGame] = useState(false)
  const [readyingPlayer, setReadyingPlayer] = useState(false)
  const [startingGame, setStartingGame] = useState(false)
  const [gameplayInputInProgress, setGameplayInputInProgress] = useState(false)

  const toast = useToast()

  const getAndSetGame = async (gameCode) => {
    setLoadingGame({ status: true, message: 'Loading game' })
    try {
      const game = await getGameById(gameCode)
      setGame(game)
    } catch (error) {
      notify(toast, { title: error, status: 'error' })
    }
    setLoadingGame({ status: false, message: '' })
  }

  const connectPlayer = (gameCode) => {
    if (socket && gameCode) {
      setLoadingGame({ status: true, message: 'Connecting player' })
      socket.emit('connect_player', { gameCode, player }, (err) => {
        setLoadingGame({ status: false, message: '' })
        if (err) {
          notify(toast, { title: err.message, status: 'error' })
          return
        }
        getAndSetGame(gameCode)
      })
    }
  }

  const disconnectPlayer = (gameCode) => {
    if (socket && gameCode) {
      socket.emit('disconnect_player', { gameCode, player })
    }
  }

  const joinGame = () => {
    if (socket && game) {
      setJoiningGame(true)
      socket.emit('join_game', { gameCode: game.code, player }, (err) => {
        setJoiningGame(false)
        if (err) {
          notify(toast, { title: err.message, status: 'error' })
        }
      })
    }
  }

  const readyPlayer = () => {
    if (socket && game) {
      setReadyingPlayer(true)
      socket.emit('ready_player', { gameCode: game.code, player }, (err) => {
        setReadyingPlayer(false)
        if (err) {
          notify(toast, { title: err.message, status: 'error' })
        }
      })
    }
  }

  const startGame = () => {
    if (socket && game) {
      setStartingGame(true)
      socket.emit('start_game', { gameCode: game.code }, (err) => {
        setStartingGame(false)
        if (err) {
          notify(toast, { title: err.message, status: 'error' })
        }
      })
    }
  }

  const acceptGameplayInput = (data) => {
    if (socket && game) {
      setGameplayInputInProgress(true)
      socket.emit(
        'gameplay_input',
        { gameCode: game.code, player, data },
        (err) => {
          setGameplayInputInProgress(false)
          if (err) {
            notify(toast, { title: err.message, status: 'error' })
          }
        },
      )
    }
  }

  const getPlayerState = () => {
    if (player && game && game.players && game.players[player.id]) {
      return game.players[player.id]
    }
  }

  const hasPlayerJoinedGame = () => !!getPlayerState()
  const isPlayerReady = () => !!getPlayerState() && getPlayerState().isReady
  const isPlayerAdmin = () => player && game.admin.id === player.id
  const isGameOver = () => game && game.state === 'OVER'
  const didPlayerWin = () => isGameOver() && game.winnerId === player.id

  useEffect(() => {
    const socketListener = io(API_BASE_URL)

    socketListener.on('connect', () => {
      setSocket(socketListener)
    })

    socketListener.on('disconnect', () => {
      setSocket(null)
    })

    socketListener.on('player_joined_game', ({ gameState }) => {
      setGame(gameState)
    })

    socketListener.on('player_ready_in_game', ({ gameState }) => {
      setGame(gameState)
    })

    socketListener.on('game_started', ({ gameState }) => {
      setGame(gameState)
    })

    socketListener.on('player_submitted_gameplay_input', ({ gameState }) => {
      setGame(gameState)
    })

    return () => socketListener.disconnect()
  }, [])

  return (
    <GameContext.Provider
      value={{
        socket,
        game,
        loadingGame,
        joiningGame,
        readyingPlayer,
        startingGame,
        gameplayInputInProgress,
        connectPlayer,
        disconnectPlayer,
        joinGame,
        readyPlayer,
        startGame,
        acceptGameplayInput,
        hasPlayerJoinedGame,
        isPlayerReady,
        isGameOver,
        didPlayerWin,
        isPlayerAdmin,
        notify,
      }}>
      {children}
    </GameContext.Provider>
  )
}

export const useGameContext = () => useContext(GameContext)
