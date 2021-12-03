import { Box, Center } from '@chakra-ui/layout'
import { SkeletonCircle, SkeletonText } from '@chakra-ui/skeleton'
import React from 'react'

const ProfileLoader = () => {
    return (
            <Box padding='6' boxShadow='lg' bg='white'>
                <Center>
                <SkeletonCircle size='40' />
                </Center>
                <SkeletonText mt='30' noOfLines={40} spacing='4' />
            </Box>
    )
}

export default ProfileLoader
