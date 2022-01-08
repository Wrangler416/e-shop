import React, {useContext} from 'react'
import {ShopContext} from "../context/shopContext"
import {Flex, Spacer, Badge, Box, Image, Icon} from '@chakra-ui/react'
import {MdMenu, MdShoppingBasket} from 'react-icons/md'
import logo from '../imgs/nike.png'
import {Link} from 'react-router-dom'

export default function Navbar() {
    const {openCart, openMenu, checkout } = useContext(ShopContext)


    return (
        <Flex backgroundColor="white" h="3rem">
            <Box p='4'>
            <Link to="/">
            <Image src={logo} h="20px"/>
            </Link> 
            </Box>
            <Spacer />

            <Box p='4'>
            <Icon fill="black" as={MdShoppingBasket} cursor="pointer" onClick={()=> openCart()}  h={30} w={30}></Icon>
            <Badge backgroundColor="white" borderRadius="50%">{checkout.lineItems?.length}</Badge>
         
            <Icon fill="black" as={MdMenu} cursor="pointer" w={30} h={30} alignItems="center" onClick={()=> openMenu()}
            ></Icon>
               </Box>  

        </Flex>
        
    )
}
