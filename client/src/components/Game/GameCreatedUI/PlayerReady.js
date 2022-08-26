import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const PlayerReady = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      {/* Better message: Players ready... n/maxPlayers */}
      <Text>Waiting for all players to get ready...</Text>
    </Flex>
  )
}

export default PlayerReady
