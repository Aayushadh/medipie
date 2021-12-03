import { Button } from '@chakra-ui/button'
import { Center } from '@chakra-ui/layout'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import React from 'react'
import { useNavigate } from 'react-router'

const Navbar = () => {

    const navigate=useNavigate()
    return (
        <div style={{backgroundColor:"#276749",fontSize:"40px"}}>
        <Menu>
        <MenuButton as={Button} colorScheme="#276749" margin="0 10px" onClick={(e)=>navigate('/')} borderRadius="0" fontSize="20px">
          Home
        </MenuButton>
        <MenuButton as={Button} colorScheme="#276749" margin="0 10px" onClick={(e)=>navigate('/dashboard')} borderRadius="0" fontSize="20px">
          Dashboard
        </MenuButton>
        <MenuButton as={Button} colorScheme="#276749" margin="0 10px" onClick={e=>navigate('/create')} borderRadius="0" fontSize="20px">
          Create
        </MenuButton>
        <MenuButton as={Button} colorScheme="#276749" margin="0 10px" onClick={e=>navigate('/login')} borderRadius="0" fontSize="20px">
          Login
        </MenuButton>
      </Menu>
        </div>

    )
}

export default Navbar
