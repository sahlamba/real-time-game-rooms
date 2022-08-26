import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'

import { useGameContext } from '../../../context/GameContext'

const GameOverDetails = () => {
  const { isGameOver, didPlayerWin } = useGameContext()

  if (!isGameOver()) {
    return null
  }

  return (
    <Flex
      w="100%"
      py={8}
      direction="column"
      alignItems="center"
      justifyContent="center"
      bg={didPlayerWin() ? 'green.500' : 'red.500'}>
      <Heading mb={4} color="white">
        You {didPlayerWin() ? 'win' : 'lose'}!
      </Heading>
    </Flex>
  )
}

export default GameOverDetails
