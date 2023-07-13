import { Flex, Text } from "@chakra-ui/react"

import * as Styled from "./styles"

export function CustomRadio({ label, checked, onChange, value, ...rest }) {
  return (
    <Flex as="label" align="center" cursor="pointer" {...rest}>
      <Flex
        align="center"
        justify="center"
        width="1.7rem"
        height="1.7rem"
        borderRadius="50%"
        // border={checked ? "2px solid #ff4f00" : "2px solid #CBD5E0"}
        border={"2px solid #CBD5E0"}
        position="relative"
        left="2px"
        top="1px"
      >
        {checked && (
          <Flex
            width="1.1rem"
            height="1.1rem"
            borderRadius="50%"
            backgroundColor="#ff4f00"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          />
        )}
      </Flex>
      <Text fontSize="md" fontWeight="normal">
        {label}
      </Text>
      <input type="radio" value={value} onChange={onChange} checked={checked} hidden />
    </Flex>
  )
}

// export function CustomRadio({ label, checked, ...rest }) {
//   return (
//     <Styled.RadioLabel>
//       <Styled.RadioWrapper>
//         <Styled.RadioInput {...rest} />
//         <Styled.RadioBall checked={checked} />
//       </Styled.RadioWrapper>
//       {label}
//     </Styled.RadioLabel>
//   );
// }
