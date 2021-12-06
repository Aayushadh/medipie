import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Center, Heading, Stack } from "@chakra-ui/layout";
import Loader from "../components/Loader";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import {
  deleteUserAction,
  listUsers,
  selectUserError,
  selectUserList,
  selectUserLoading,
} from "../app/slices/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, loading, error } = useSelector((state) => state.userList);

  const deleteUser = (id) => {
    dispatch(deleteUserAction(id, users));
  };
  useEffect(() => {
    dispatch(listUsers());
    // console.log(users)
  }, [dispatch]);

  return (
    <Center>
      <Stack>
        <Center>
          {error.message != undefined && <h1>{error.message}</h1>}
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
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((data) => (
                <tr key={data.id}>
                  <td>
                    <a onClick={() => navigate(`${data.id}`)} href="">
                      {data.name}
                    </a>
                  </td>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data.address.city}</td>
                  <td>{data.phone}</td>
                  <td>{data.website}</td>
                  <td>
                    <IconButton
                      icon={<CloseIcon />}
                      onClick={() => deleteUser(data.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {loading && (
            <Center>
              <Loader />
            </Center>
          )}
        </div>
      </Stack>
    </Center>
  );
};

export default Dashboard;
