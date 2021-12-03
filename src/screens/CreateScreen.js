import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input, InputGroup } from "@chakra-ui/input";
import { Center, Flex, Stack, Text } from "@chakra-ui/layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router";
import axios from "axios";
import Loader from "../components/Loader";
import ProfileLoader from "../components/ProfileLoader";

const CreateScreen = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const createData = async (value) => {
    try {
      setLoading(true);
      const temp = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        value
      );
      setLoading(false);
      swal("Data Added Successfully", "Saved!", "success").then(() =>
        navigate("/dashboard")
      );
    } catch (error) {
      swal("Something Went Wrong", "Not able to save data", "error").then();
    }
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      username: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      username: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      address: Yup.string().required("Required"),
      website: Yup.string().required("Required"),
      phone: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      createData(values);
    },
  });

  return (
    <Flex>
      <div
        style={{
          backgroundColor: "#f0f0f0",
          width: "30%",
          margin: "auto",
          marginTop: "10%",
        }}
      >
        <Center>
          <Stack spacing={3} margin="30px 100px">
            {loading && <Loader />}
            <Center>
              <Text fontSize="3xl">
                <b>Create Data</b>
                <ul />
              </Text>
            </Center>

            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                borderColor="black"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <FormHelperText style={{ color: "red" }}>
                  <div>{formik.errors.name}</div>
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl id="username">
              <FormLabel>User Name</FormLabel>
              <Input
                type="text"
                borderColor="black"
                name="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <FormHelperText style={{ color: "red" }}>
                  <div>{formik.errors.username}</div>
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                borderColor="black"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <FormHelperText style={{ color: "red" }}>
                  <div>{formik.errors.email}</div>
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl id="address">
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                borderColor="black"
                name="address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address ? (
                <FormHelperText style={{ color: "red" }}>
                  <div>{formik.errors.address}</div>
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl id="phone">
              <FormLabel>Phone</FormLabel>
              <Input
                type="text"
                borderColor="black"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <FormHelperText style={{ color: "red" }}>
                  <div>{formik.errors.phone}</div>
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl id="website">
              <FormLabel>Website</FormLabel>
              <Input
                type="text"
                borderColor="black"
                name="website"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.website}
              />
              {formik.touched.website && formik.errors.website ? (
                <FormHelperText style={{ color: "red" }}>
                  <div>{formik.errors.website}</div>
                </FormHelperText>
              ) : null}
            </FormControl>

            <br />

            <FormControl id="submit">
              <Input
                type="submit"
                borderColor="black"
                onClick={() => formik.handleSubmit()}
              />
            </FormControl>
          </Stack>
        </Center>
      </div>
    </Flex>
  );
};

export default CreateScreen;
