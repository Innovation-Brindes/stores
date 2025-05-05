import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import React from "react";

export function ModalMap({
  longitude,
  latitude,
  distancia,
  isOpen,
  onClose,
  onOpen,
}) {
  const [map, setMap] = React.useState(null);
  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const [size, setSize] = React.useState('md')

  // const handleSizeClick = (newSize) => {
  //   setSize(newSize)
  //   onOpen()
  // }

  useEffect(() => {
    // Verificar se o script do Google Maps já foi carregado
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
      script.onload = () => {
        // Quando o script for carregado, criar o mapa
        const newMap = new window.google.maps.Map(
          document.getElementById("map"),
          {
            center: { lat: latitude, lng: longitude },
            zoom: 15,
          }
        );
        setMap(newMap);
      };
      document.body.appendChild(script);
    } else {
      // Se o script já foi carregado, criar o mapa imediatamente
      const newMap = new window.google.maps.Map(
        document.getElementById("map"),
        {
          center: { lat: latitude, lng: longitude },
          zoom: 15,
        }
      );
      setMap(newMap);
    }
  }, [latitude, longitude]);

  return (
    <>
      <Button
        leftIcon={<FaMapMarkerAlt />}
        size="sm"
        variant="ghost"
        onClick={onOpen}
      >
        Ver no Mapa
      </Button>

      <Modal onClose={onClose} size={"lg"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{/* <Lorem count={2} /> */}</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
