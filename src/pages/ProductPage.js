import React, {useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import {ShopContext} from '../context/shopContext'
import {Box, Grid, Image, Text, Button, Heading, Flex} from '@chakra-ui/react'

export default function ProductPage() {

    const {handle} = useParams()
    const {fetchProductWithHandle, addItemtoCheckout, product} = useContext(ShopContext)

 

    useEffect(()=>{
        fetchProductWithHandle(handle)
    }, [ fetchProductWithHandle, handle])

    if(!product.title) return <div>Loading...</div> 

    return (
        <Box p="2rem">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} m="auto">
                <Flex justifyContent="center" alignItems="center" >
                <Image src={product.images[0].src} boxSize='sm' />
                </Flex>
                <Flex flexDirection="column" alignItems="center" jusftifyContent="center" px="2rem">
                    <Heading pb="2rem">{product.title}</Heading>
                    <Text fontWeight="bold" pb="2rem">{product.variants[0].price}</Text>
                    <Text color="gray.500"pb="2rem">{product.description}</Text>
                    <Button 
                        color="black"
                        w="10rem"
                        _hover={{opacity: '70%'}}
                        onClick={()=> addItemtoCheckout(product.variants[0].id, 1)}
                    
                    >Add to Cart</Button>
                </Flex>
            </Grid>
        </Box>
    )
}


