import React from 'react'

import { usePlayerContext } from '../../../context/PlayerContext'
import { useGameContext } from '../../../context/GameContext'

import PlayerNotJoined from './PlayerNotJoined'
import PlayerJoinedNotReady from './PlayerJoinedNotReady'
import PlayerReady from './PlayerReady'

const GameCreatedUI = () => {
  const { player } = usePlayerContext()
  const { hasPlayerJoinedGame, isPlayerReady } = useGameContext()

  return (
    <React.Fragment>
      {!hasPlayerJoinedGame(player) && <PlayerNotJoined />}
      {hasPlayerJoinedGame(player) && !isPlayerReady(player) && (
        <PlayerJoinedNotReady />
      )}
      {hasPlayerJoinedGame(player) && isPlayerReady(player) && <PlayerReady />}
    </React.Fragment>
  )
}

export default GameCreatedUI
