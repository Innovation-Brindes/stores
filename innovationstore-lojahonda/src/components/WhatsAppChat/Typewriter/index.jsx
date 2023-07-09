import React from "react";
import Typewritter from "typewriter-effect";
import { useWhatsApp } from "../../../contexts/WhatsAppProvider";

const TypewritterEf = ({ text, time = 40000 }) => {
  const { openChat } = useWhatsApp();

  //iniciar só quando o chat estiver aberto
  if (!openChat) return null;

  return (
    <div>
      <Typewritter
        options={{
          strings: text,
          autoStart: true,
          loop: false,
          delay: time,
        }}
      />
    </div>
  );
};

export default TypewritterEf;
