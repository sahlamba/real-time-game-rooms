import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

import { usePlayerContext } from '../../../context/PlayerContext'
import { useGameContext } from '../../../context/GameContext'

import StartGameButton from './StartGameButton'

const GameReadyToStartUI = () => {
  const { player } = usePlayerContext()
  const { isPlayerAdmin } = useGameContext()

  return (
    <Flex my={8} alignItems="center" justifyContent="center">
      {isPlayerAdmin(player) ? (
        <StartGameButton />
      ) : (
        <Text>Waiting for game admin to start game...</Text>
      )}
    </Flex>
  )
}

export default GameReadyToStartUI
