import { Box, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function QRCode({ urlPix }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      urlPix && setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Box
        width="30px"
        height="30px"
        position="absolute"
        top="-1px"
        left="-1px"
        borderTop="6px solid #7FBC03"
        borderLeft="6px solid #7FBC03"
        borderBottomLeftRadius="2px"
        borderBottomRightRadius="2px"
        borderTopRightRadius="2px"
        borderTopLeftRadius="2px"
      />
      <Box
        width="30px"
        height="30px"
        position="absolute"
        top="-1px"
        right="49px"
        borderTop="6px solid #7FBC03"
        borderRight="6px solid #7FBC03"
        borderBottomLeftRadius="2px"
        borderBottomRightRadius="2px"
        borderTopRightRadius="2px"
        borderTopLeftRadius="2px"
      />

      {urlPix ? (
        <iframe
          src={urlPix}
          title="QRCode Pix"
          width="300"
          height="300"
          frameBorder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          style={{
            margin: "2rem!important",
          }}
        ></iframe>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="300px"
          height="300px"
          backgroundColor="#fff"
        >
          {loading && (
            <Text as="span" m="0" transform="translate(-23px, -24px)">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                size="xl"
                color="#7FBC03"
              />
            </Text>
          )}
        </Box>
      )}
      <Box
        width="30px"
        height="30px"
        position="absolute"
        bottom="49px"
        left="-1px"
        borderBottom="6px solid #7FBC03"
        borderLeft="6px solid #7FBC03"
        borderBottomLeftRadius="2px"
        borderBottomRightRadius="2px"
        borderTopRightRadius="2px"
        borderTopLeftRadius="2px"
      />
      <Box
        width="30px"
        height="30px"
        position="absolute"
        bottom="49px"
        right="49px"
        borderBottom="6px solid #7FBC03"
        borderRight="6px solid #7FBC03"
        borderBottomLeftRadius="2px"
        borderBottomRightRadius="2px"
        borderTopRightRadius="2px"
        borderTopLeftRadius="2px"
      />
    </>
  );
}
