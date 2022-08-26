import React from 'react'
import { Flex } from '@chakra-ui/react'

import { useGameContext } from '../../../context/GameContext'

import GamePlayInput from './GamePlayInput'
import GameOverDetails from './GameOverDetails'

const GamePlayUI = () => {
  const { acceptGameplayInput, gameplayInputInProgress, isGameOver } =
    useGameContext()

  const gameplayInputOnClick = () => {
    acceptGameplayInput()
  }

  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      {isGameOver() ? (
        <GameOverDetails />
      ) : (
        <GamePlayInput
          onSubmit={gameplayInputOnClick}
          isLoading={gameplayInputInProgress}
        />
      )}
    </Flex>
  )
}

export default GamePlayUI
