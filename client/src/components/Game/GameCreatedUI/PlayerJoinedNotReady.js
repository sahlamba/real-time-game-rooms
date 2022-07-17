import React from 'react'

import { usePlayerContext } from '../../../context/PlayerContext'
import { useGameContext } from '../../../context/GameContext'

import JottoWordInput from './JottoWordInput'

const PlayerJoinedNotReady = () => {
  const { player } = usePlayerContext()
  const { game, readyPlayer, readyingPlayer } = useGameContext()

  const readyPlayerOnSubmit = ({ jottoWord }) => {
    readyPlayer(game.code, player, jottoWord)
  }

  return (
    <JottoWordInput onSubmit={readyPlayerOnSubmit} isLoading={readyingPlayer} />
  )
}

export default PlayerJoinedNotReady
