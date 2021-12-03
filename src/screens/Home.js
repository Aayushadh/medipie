import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input, InputGroup } from "@chakra-ui/input";
import { Center, Flex, Stack, Text } from "@chakra-ui/layout";
import { useFormik } from "formik";
import * as Yup from 'yup';
import React from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          password:'',
        },
        validationSchema: Yup.object({
          name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          password:Yup.string().required('Required'),
          confirmpassword: Yup.string().when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
              [Yup.ref("password")],
              "Password Must Match"
            )
          })
        }),
        onSubmit: values => {
            swal("Registration Done!", "Details have been saved!", "success").then(()=>navigate('/dashboard'));

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
         <Center>
           <Text fontSize="3xl">
             <b>Sign Up</b>
             <ul/>
           </Text>
         </Center>
         
         <FormControl id="name">
           <FormLabel>Name</FormLabel>
           <Input type="text" borderColor="black" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}/>
           {formik.touched.name && formik.errors.name ? (
         <FormHelperText style={{color:"red"}}><div>{formik.errors.name}</div></FormHelperText>
       ) : null}
         </FormControl>

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

         <FormControl id="cpassword">
           <FormLabel>Confirm Password</FormLabel>
           <Input type="password" borderColor="black" name="confirmpassword" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmpassword}/>
           {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
         <FormHelperText style={{color:"red"}}><div>{formik.errors.confirmpassword}</div></FormHelperText>
       ) : null}
         </FormControl>
         
         <br/>
         
         <FormControl id="submit">
             <FormHelperText><a href="login">Already have an account ?</a></FormHelperText>
             <br/>
           <Input type="submit" borderColor="black" onClick={()=>formik.handleSubmit()}/>
         </FormControl>
       </Stack>
     </Center>
   </div>
   </Flex>
  );
};

export default Home;
