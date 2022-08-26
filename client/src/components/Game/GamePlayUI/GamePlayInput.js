import React from 'react'
import { Button, Flex } from '@chakra-ui/react'

import { useGameContext } from '../../../context/GameContext'

const GamePlayInput = ({ onSubmit, isLoading }) => {
  const { isGameOver } = useGameContext()

  const submit = (evt) => {
    evt.preventDefault()
    onSubmit()
  }

  return (
    <Flex maxW="100%" alignItems="center" justifyContent="center">
      <form onSubmit={submit}>
        <Button
          disabled={isGameOver()}
          type="submit"
          size="lg"
          colorScheme="green"
          variant="solid"
          isLoading={isLoading}>
          Gameplay Input?
        </Button>
      </form>
    </Flex>
  )
}

export default GamePlayInput
