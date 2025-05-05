import { useToast, ToastContainer } from "@chakra-ui/react";
import { useEffect } from "react";

const Toast = ({ children, ...props }) => {
  const toast = useToast();

  useEffect(() => {
    toast({
      position: "top",
      title: props.message,
      description: props.description,
      status: props.status,
      duration: 9000,
      isClosable: true,
    });
  }, []);

  return <></>;
};

export default Toast;
