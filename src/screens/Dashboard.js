import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../app/actions/userActions";
import { useNavigate } from "react-router-dom";
import { Center, Heading, Stack } from "@chakra-ui/layout";
import Loader from "../components/Loader";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.userList);
  const { loading, users, errors } = userList;

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  return (
    <Center>
      <Stack>
        <Center>
          <Heading as="h1">Dashboard</Heading>
          
        </Center>
        <div style={{ overflowX: "auto" }}>
          <table id="customers">
            <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone No</th>
              <th>Website</th>
            </tr>
            </thead>
            <tbody>
            {users.map((data) => (
              <tr key={data.id}>
                <td>
                  <a onClick={() => navigate(`${data.id}`)} href="">{data.name}</a>
                </td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.address.city}</td>
                <td>{data.phone}</td>
                <td>{data.website}</td>
              </tr>
            ))}
            </tbody>
          </table>
          {loading && <Center><Loader/></Center>}
        </div>
      </Stack>
    </Center>
  );
};

export default Dashboard;
