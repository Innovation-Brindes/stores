import { Flex, useMediaQuery } from "@chakra-ui/react";
import * as S from "./styles";

export function DeclaracaoLeitura({ setIsChecked }) {
  const [isMaxWidth768] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      alignItems="center"
      gap={6}
      width="100%"
      {...(!isMaxWidth768 && {
        _after: {
          content: '""',
          height: "2px",
          width: "80%",
          backgroundColor: "#cecece",
        },
        _before: {
          content: '""',
          height: "2px",
          width: "80%",
          backgroundColor: "#cecece",
        },
      })}
    >
      <Flex width="105%" alignItems="center" justifyContent="center" gap={3}>
        <S.Checkbox
          type="checkbox"
          id="declaracaoLeitura"
          name="declaracaoLeitura"
          onChange={(e) => setIsChecked(e.target.checked)}
        />

        <label
          htmlFor="declaracaoLeitura"
          style={{
            cursor: "pointer",
            display: "inline-block",
            textAlign: "center",
          }}
        >
          Declaro que li e aceito os termos de uso e política de privacidade
        </label>
      </Flex>
    </Flex>
  );
}
