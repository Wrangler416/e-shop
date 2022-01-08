import React from 'react'
import {Grid, Flex, Icon, Text, Link, Box, VStack} from '@chakra-ui/react'
import {MdFacebook, } from 'react-icons/md'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube, FaInstagram} from 'react-icons/fa'

export default function Footer() {

    return (
        <Box backgroundColor="black" color="white">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr"]}>

                <VStack p="2rem">
                    <Link to="">GIFT CARDS</Link>
                    <Link to="">PROMOTIONS</Link>
                    <Link to="">FIND A STORE</Link>
                    <Link to="">SIGN UP FOR EMAIL</Link>
                </VStack>

                <VStack p="2rem">
                    <Link to="">ORDER STATUS</Link>
                    <Link to="">SHIPPING AND DELIVERY</Link>
                    <Link to="">RETURNS</Link>
                    <Link to="">PAYMENT OPTIONS</Link>
                </VStack>

                <Flex alignItems="center" margin="auto">

                    <Icon fill="grey" as={FaTwitter} h={30} w={30}cursor="pointer">
                    </Icon>
                    <Icon fill="grey" as={MdFacebook} h={30} w={30}cursor="pointer">
                    </Icon>
                    <Icon fill="grey" as={FaYoutube} h={30} w={30}cursor="pointer">
                    </Icon>
                    <Icon fill="grey" as={FaInstagram} h={30} w={30}cursor="pointer">
                    </Icon>
                </Flex>
                <Text textAlign="center" p="4rem">Copyright Kara-Nike 2022</Text>

            </Grid>
        </Box>
    )
}



