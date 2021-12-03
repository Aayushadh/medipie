import { Avatar } from "@chakra-ui/avatar";
import { Box, Center, Text } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getUserProfile } from "../app/actions/userActions";
import ProfileLoader from "../components/ProfileLoader";

const UserProfile = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userProfile = useSelector((state) => state.userProfile);
  const { loading, profile, errors } = userProfile;

  useEffect(() => {
    dispatch(getUserProfile(params.id));
    console.log(params.id);
    console.log(profile);
  }, [dispatch]);

  return (
    <div
      style={{
        backgroundColor: "#F0F0F0",
        width: "50%",
        margin: "100px auto",
        padding: "10px 100px 100px 100px",
      }}
    >
      {loading && <ProfileLoader />}
      {!loading && (
        <Center marginTop="10%">
          <Box>
            {profile.map((data) => (
              <>
                <Center>
                  <Avatar size="2xl" name={data.name} />{" "}
                </Center>
                <br />
                <Text fontSize="2xl">
                  <b>Name: </b>
                  {data.name}
                </Text>
                <Text fontSize="2xl">
                  <b>UserName: </b>
                  {data.username}
                </Text>
                <Text fontSize="2xl">
                  <b>Email: </b>
                  {data.email}
                </Text>
                <Text fontSize="2xl">
                  <b>Phone: </b>
                  {data.phone}
                </Text>
                <Text fontSize="2xl">
                  <b>Address: </b>
                  {data.address.street}, {data.address.suite},{" "}
                  {data.address.city}
                </Text>
                <Text fontSize="2xl">
                  <b>Company: </b>
                  {data.company.name}
                </Text>
                <Text fontSize="2xl">
                  <b>Website: </b>
                  {data.website}
                </Text>
              </>
            ))}
          </Box>
        </Center>
      )}
    </div>
  );
};

export default UserProfile;
