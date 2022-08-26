import React from 'react'
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Badge,
  Flex,
  Text,
} from '@chakra-ui/react'

import { useGameContext } from '../../context/GameContext'

const GameCode = () => {
  const { game } = useGameContext()

  return (
    <Flex my={1} mx={1} direction="column" alignItems="center">
      <Text mb={1} fontSize="0.8rem" color="gray.500">
        Game code
      </Text>
      <Badge ml={1} variant="solid" fontSize="1.2rem">
        {game.code}
      </Badge>
    </Flex>
  )
}

const PlayersInGame = () => {
  const { game } = useGameContext()

  if (!game || !game.players || !Object.values(game.players).length) {
    return null
  }

  const renderPlayerNamesInGame = () =>
    game ? (
      <Flex my={1} mx={1} direction="column" alignItems="center">
        <Text mb={1} fontSize="0.8rem" color="gray.500">
          Players in game
        </Text>
        <AvatarGroup size="sm" max={10}>
          {Object.values(game.players).map((playerState) => (
            <Avatar
              key={playerState.player.id}
              name={playerState.player.name}
              showBorder>
              <AvatarBadge
                boxSize="1.25em"
                bg={playerState.isReady ? 'green.500' : 'orange.500'}
              />
            </Avatar>
          ))}
        </AvatarGroup>
      </Flex>
    ) : (
      []
    )

  return (
    <Flex my={1} mx={1} alignItems="center">
      {renderPlayerNamesInGame()}
    </Flex>
  )
}

const GameDetails = () => {
  return (
    <Flex mt={4} mb={8} alignItems="baseline" justifyContent="center">
      <GameCode />
      <PlayersInGame />
    </Flex>
  )
}

export default GameDetails
