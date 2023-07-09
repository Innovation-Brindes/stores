import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";

export function TimerConfirmar({ label }) {
  const currentDate = new Date();
  const nextDayWith14Hours = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    14,
    0,
    0
  );

  //calcular dias utéis
  function isWeekend(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  const [timeLeft, setTimeLeft] = useState(
    Math.floor((nextDayWith14Hours - currentDate) / 1000)
  );

  useEffect(() => {
    if (!isWeekend(currentDate)) {
      const timer = setInterval(() => {
        setTimeLeft((timeLeft) => {
          if (timeLeft > 0) {
            return timeLeft - 1;
          } else if (timeLeft === 0) {
            window.localStorage.removeItem("aprovadorPor");
            window.localStorage.removeItem("boleto");
            window.localStorage.removeItem("urlPix");
            window.location.reload();
            window.clearInterval(timer);
          } else {
            return setTimeLeft(
              Number(
                Math.floor((nextDayWith14Hours - currentDate) / 1000) + 86400
              )
            );
          }
        });
      }, 1000);
    }
  }, []);

  const hours = Math.floor(timeLeft / 3600);

  const minutes = Math.floor((timeLeft - hours * 3600) / 60);

  const seconds = timeLeft - hours * 3600 - minutes * 60;

  const fullHoursFormatted = hours.toString().padStart(2, "0");
  const fullMinutesFormatted = minutes.toString().padStart(2, "0");
  const fullSecondsFormatted = seconds.toString().padStart(2, "0");

  const finalTime = `${fullHoursFormatted}:${fullMinutesFormatted}:${fullSecondsFormatted}`;

  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <Text fontSize="2xl" fontWeight="normal" marginBottom="0">
          {label}
        </Text>{" "}
        <Flex
          height=".1rem"
          width="100%"
          bgColor="#cecece"
          marginTop="2rem"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            fontSize="2rem"
            fontWeight="bold"
            margin="0"
            bgColor="#fff"
            paddingInline="1rem"
          >
            {finalTime}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
