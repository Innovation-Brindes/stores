import { Button, Text } from "@chakra-ui/react";
import * as S from "../styles";

export function ButtonFinalizar({ isSolicitation = false }) {
  return isSolicitation ? (
    <S.Button>
      <Text>Finalizar</Text>
    </S.Button>
  ) : (
    <S.Button>
      <Text>Avançar</Text>
    </S.Button>
  );
}
