import {
  Box,
  Flex,
  Image,
  Input,
  Progress,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import * as S from "../styles";
import { HiOutlineUpload } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import React, { useState } from "react";
import { set } from "react-hook-form";
import { useEffect, useRef } from "react";

export function ButtonSave({
  enviarImagens,
  isSubmitting,
  progress,
  messageProgress,
  label,
  handleIdTabela,
  setIndex,
  changeBg,
  changeColor,
  containsPhoto,
  deleteIDTabela,
  index,
  isChecked,
  toast,
  isDisabled,
}) {
  const inputRef = useRef(null);
  const [isMaxWidth768] = useMediaQuery("(max-width: 768px)");
  const [isMinMax, setIsMinMax] = React.useState(false);

  React.useEffect(() => {
    if (isMaxWidth768) {
      setIsMinMax(true);
    } else {
      setIsMinMax(false);
    }
  }, [isMaxWidth768]);

  //verificar se tem imagem no input

  const [file, setFile] = useState(null);

  function remover() {
    let dataT = new DataTransfer();

    for (let i = 0; i < inputRef.current.files.length; i++) {
      if (
        inputRef.current.files[i].name !== undefined &&
        inputRef.current.files[i].name !== inputRef.current.files[i]?.name
      )
        dataT.items.add(inputRef.current.files[i]);
    }

    inputRef.current.files = dataT.files;
    deleteIDTabela();
  }

  const handleFile = (e, action) => {
    if (action === "delete") {
      setFile(null);
      e.target.value = "";
      e.target.name = "";
      return;
    }

    setFile(e.target.files[0]);
  };

  return (
    <Flex
      position="relative"
      cursor={isSubmitting ? "not-allowed" : "pointer"}
      mt={isMinMax ? "1rem" : "0"}
    >
      {" "}
      <S.BoxSolicitacaoLayout
        background={file && changeBg}
        isDisabled={isDisabled}
      >
        <>
          <Input
            name="file"
            type="file"
            onChange={(e) => {
              enviarImagens(e);
              handleIdTabela();
              handleFile(e);
            }}
            ref={inputRef}
            onClick={!isSubmitting && setIndex}
            accept=".jpg, .jpeg, .png, .pdf, .svg, .ps, .ai, .cdr"
            disabled={isDisabled}
            cursor={isSubmitting ? "not-allowed" : "pointer"}
          />
          <Text
            className="span"
            for="file"
            textAlign="center"
            onClick={!isSubmitting && setIndex}
            margin="0"
            cursor={isSubmitting ? "not-allowed" : "pointer"}
          >
            {containsPhoto && (
              <button
                type="button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  right: "7px",
                  top: "8px",
                }}
                onClick={() => {
                  remover();
                  deleteIDTabela();
                }}
              >
                <AiFillCloseCircle size={30} color="#f84009" />
              </button>
            )}
          </Text>
          {isSubmitting ? (
            <Flex
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Progress value={progress} min="0" max="100" width="40" />
              <Text
                as="span"
                position="absolute"
                color="#f84009"
                fontSize="1.2rem"
                fontWeight="bold"
                right={isMinMax ? "-.1rem" : "-3.3rem"}
                top={isMinMax && "-1.5rem"}
              >
                {messageProgress}
              </Text>
            </Flex>
          ) : (
            ""
          )}
        </>
      </S.BoxSolicitacaoLayout>
      {containsPhoto && !!toast.errorSize && (
        <span
          style={{
            color: "#f84009",
            fontSize: ".8rem",
            fontWeight: "norrmal",
            position: "absolute",
            right: "1.3rem",
            top: "-1.5rem",
          }}
        >
          Arquivo com erro
        </span>
      )}
    </Flex>
  );
}
