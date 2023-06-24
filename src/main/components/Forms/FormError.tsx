import { useRouteError } from "react-router-dom";
import React from "react";
import { VStack } from "@chakra-ui/react";

const FormError = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <VStack w="full">
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </VStack>
  );
};

export default FormError;
