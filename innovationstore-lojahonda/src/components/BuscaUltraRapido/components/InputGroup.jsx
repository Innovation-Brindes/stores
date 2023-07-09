import { Input, InputLeftAddon, InputGroup as ChakraInputGroup } from "@chakra-ui/react"
import React, { forwardRef } from "react"

const InputGroup = ({ label, type, placeholder = false, id, name, ...rest }, ref) => {
  return (
    <ChakraInputGroup>
      <InputLeftAddon children={label} />
      <Input type={type} placeholder={placeholder} ref={ref} id={id} name={name} {...rest} />
    </ChakraInputGroup>
  )
}

export default forwardRef(InputGroup)
