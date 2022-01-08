import React, {useContext} from 'react'
import {ShopContext} from '../context/shopContext'
import {Link} from 'react-router-dom'
import {
    Text,
    VStack,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton
  } from '@chakra-ui/react'
import AllProducts from '../components/AllProducts'



export default function NavMenu() {


    const {isMenuOpen, closeMenu, openCart} = useContext(ShopContext)


    return (
        <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="top" size="sm">
      
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <VStack p="2rem">
                <Link to="/products/" element={<AllProducts />}>All Products</Link>
                <Link to="/">Home</Link>
                <Text cursor="pointer" onClick={()=> openCart()} >Your Cart</Text>
              </VStack>

         </DrawerBody>

          <DrawerFooter textAlign="center">
                <Text w="100%">
                    Copyright Kara-Nike 2022
                </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

    )
}


