import React from 'react'
import { Button, Flex } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

import { usePlayerContext } from '../../../context/PlayerContext'
import { useGameContext } from '../../../context/GameContext'

const PlayerNotJoined = () => {
  const { player } = usePlayerContext()
  const { game, joinGame, joiningGame } = useGameContext()

  const joinGameOnCLick = () => joinGame(game.code, player)

  return (
    <Flex alignItems="center" justifyContent="center">
      <Button
        colorScheme="purple"
        variant="solid"
        rightIcon={<CheckIcon />}
        onClick={joinGameOnCLick}
        isLoading={joiningGame}>
        Join this game
      </Button>
    </Flex>
  )
}

export default PlayerNotJoined
