import React, {useContext, useEffect} from 'react'
import {Box, Grid, Heading, Image, Text} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {ShopContext} from '../context/shopContext'

export default function AllProducts() {

    const {fetchAllProducts, products} = useContext(ShopContext)

    useEffect(()=>{
        fetchAllProducts()
    }, [fetchAllProducts])

    return (
        <Box>
            <Heading p="2rem">
                New Shoes
            </Heading>
        
        <Grid templateColumns="repeat(2, 1fr)">

        {products.map(product => (
            <Link to={`/products/${product.handle}`} key={product.id}>
                <Box _hover={{opacity: '80%'}} textAlign="center" >
                <Image src={product.images[0].src} />
                <Text fontWeight="bold" bottom="7%" w="100%">
                {product.title}  ${product.variants[0].price}
                </Text>
                <Text color="grey" bottom="1%" w="100%">
                    {product.description}
                </Text>
                </Box>
                    
            </Link>
        ))}
        </Grid>

        </Box>
    
    )
}
