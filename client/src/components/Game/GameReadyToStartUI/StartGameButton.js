import React from 'react'
import { Button } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

import { useGameContext } from '../../../context/GameContext'

const StartGameButton = () => {
  const { game, startGame, startingGame } = useGameContext()

  const startGameOnClick = () => startGame(game.code)
  return (
    <Button
      colorScheme="green"
      variant="solid"
      rightIcon={<CheckIcon />}
      onClick={startGameOnClick}
      isLoading={startingGame}>
      Start game
    </Button>
  )
}

export default StartGameButton
