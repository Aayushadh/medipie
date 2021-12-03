import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input, InputGroup } from "@chakra-ui/input";
import { Center, Flex, Stack, Text } from "@chakra-ui/layout";
import { useFormik } from "formik";
import React from "react";
import { Navigate, useNavigate } from "react-router";
import swal from "sweetalert";
import * as Yup from "yup"

const LoginScreen = () => {

    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
          email: '',
          password:'',
        },
        validationSchema: Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
          password:Yup.string().required('Required'),
        }),
        onSubmit: values => {
            swal("Welcome to MedPie!", "login successfull!", "success").then(()=>navigate('/dashboard'));

        },
      });
  return (
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
          <Center>
            <Text fontSize="3xl">
              <b>Login</b>
              <ul />
            </Text>
          </Center>

          <FormControl id="email">
           <FormLabel>Email address</FormLabel>
           <Input type="email" borderColor="black" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
           {formik.touched.email && formik.errors.email ? (
         <FormHelperText style={{color:"red"}}><div>{formik.errors.email}</div></FormHelperText>
       ) : null}
         </FormControl>
         
         <FormControl id="password">
           <FormLabel>Password</FormLabel>
           <Input type="password" borderColor="black" name="password" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.password}/>
           {formik.touched.password && formik.errors.password ? (
         <FormHelperText style={{color:"red"}}><div>{formik.errors.password}</div></FormHelperText>
       ) : null}
         </FormControl>

          <br />

          <FormControl id="submit">
            <FormHelperText>
              <a href="/">New user?</a>
            </FormHelperText>
            <br />
            <Input type="submit" borderColor="black" onClick={()=>formik.handleSubmit()}/>
          </FormControl>
          <br />
          <br />
        </Stack>
      </Center>
    </div>
  );
};

export default LoginScreen;
