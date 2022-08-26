import React from 'react'

import { useGameContext } from '../../../context/GameContext'

import ReadyInput from './ReadyInput'

const PlayerJoinedNotReady = () => {
  const { readyPlayer, readyingPlayer } = useGameContext()

  const readyPlayerOnSubmit = () => {
    readyPlayer()
  }

  return (
    <ReadyInput onSubmit={readyPlayerOnSubmit} isLoading={readyingPlayer} />
  )
}

export default PlayerJoinedNotReady
