import React, { useState } from 'react'
import { Button, Flex } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

const ReadyInput = ({ onSubmit, isLoading }) => {
  const submit = (evt) => {
    evt.preventDefault()
    onSubmit()
  }

  return (
    <Flex maxW="100%" alignItems="center" justifyContent="center">
      <form onSubmit={submit}>
        <Button
          type="submit"
          size="lg"
          colorScheme="green"
          variant="solid"
          rightIcon={<CheckIcon />}
          isLoading={isLoading}>
          Ready
        </Button>
      </form>
    </Flex>
  )
}

export default ReadyInput
