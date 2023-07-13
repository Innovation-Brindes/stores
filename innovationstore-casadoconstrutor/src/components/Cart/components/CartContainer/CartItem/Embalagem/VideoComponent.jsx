import { AspectRatio, Flex, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { AiFillCloseCircle } from "react-icons/ai";

export function VideoComponent() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isLargerThan1500] = useMediaQuery("(max-width: 1500px)");
  const [videoOpen, setVideoOpen] = useState(false);

  const [isMedia, setIsMedia] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMedia(isLargerThan1500);
    setIsMobile(isLargerThan768);
  }, [isLargerThan1500, isLargerThan768]);

  return (
    <>
      {videoOpen && (
        <Flex
          position="fixed"
          width="100%"
          height="100%"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="999"
          bg="rgba(0, 0, 0, 0.5)"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
        >
          <Flex
            width={"840px"}
            mb="1rem"
            mr={!isMobile && "3.813rem"}
            margin={"0 auto"}
            position="relative"
            cursor="pointer"
          >
            <Flex
              position="absolute"
              top="-2rem"
              right="-.2rem"
              cursor="pointer"
              onClick={() => setVideoOpen(!videoOpen)}
            >
              <AiFillCloseCircle size="2rem" color="#fff" />
            </Flex>
            <AspectRatio
              width="100%"
              boxShadow={"0px 3px 6px #00000029"}
              padding="2rem"
              ratio={16 / 9}
              mb={isMedia ? "1rem" : "0"}
              cursor="pointer"
            >
              <ReactPlayer
                url="https://res.cloudinary.com/dq5bnyls8/video/upload/v1679510258/embalagens_personalizadas_full_jmwgsq.mp4"
                width="100%"
                height="100%"
                controls
                playing
                loop
                autoplay={true}
                style={{
                  margin: "0 auto",
                  cursor: "pointer",
                }}
                cursor="pointer"
              />
            </AspectRatio>
          </Flex>
        </Flex>
      )}

      <Flex
        width={isMedia ? "20.188rem" : "30.188rem"}
        mb="1rem"
        mr={!isMobile && "3.813rem"}
        margin={"0 auto"}
        onClick={() => setVideoOpen(!videoOpen)}
        cursor="pointer"
      >
        <AspectRatio
          width="30.188rem"
          boxShadow={"0px 3px 6px #00000029"}
          padding="2rem"
          ratio={16 / 9}
          mb={isMedia ? "1rem" : "0"}
          cursor="pointer"
        >
          <ReactPlayer
            url="https://res.cloudinary.com/dq5bnyls8/video/upload/v1679510176/video_preview_embalagem_ptheby.mp4"
            width="100%"
            height="100%"
            controls
            playing
            loop
            autoplay={true}
            style={{
              margin: "0 auto",
            }}
          />
        </AspectRatio>
      </Flex>
    </>
  );
}
