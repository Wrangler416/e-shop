import React, {useContext, useEffect} from 'react'
import {ShopContext} from '../context/shopContext'
import {Link} from 'react-router-dom'
import {Box, Heading, Grid, Text, Image, Center, Button} from '@chakra-ui/react'
//import Hero from '../components/Hero'
import Featured from "../components/Featured"
import MiniBar from "../components/MiniBar"
import womanfit from "../imgs/womanfit.jpeg"

export default function Home() {

const {fetchAllProducts, products} = useContext(ShopContext)

useEffect(()=>{
    fetchAllProducts()
}, [fetchAllProducts])

if (!products) return <div>Loading...</div>
    return (
        <Box>
            <MiniBar />
            <Image src={womanfit} h="100%" margin="auto" 
    objectFit="contain" objectPosition={["top", "center"]} />
              <Text
                    w="100%" textAlign="center" 
                    color="black" fontWeight="bold" 
                    fontSize="3.5rem"
                    fontFamily='Staatliches'
                    > Katy the Arabian
                    </Text> 
            <Text
            w="100%" textAlign="center" 
            color="black" 
            fontSize="1rem"> Looks inspired by The Arabian Girl Coach, plus a strange new workout in NTC. 
            </Text> 

             <Center>
                <Button 
                w="10rem" 
                p="1rem"
                backgroundColor="black" 
                color="white" 
                _hover={{opacity: "70%"}} 
                >Shop Her Look
                 </Button>
                 <Button 
                w="10rem" 
                p="1rem"
                backgroundColor="black" 
                margin='1rem'
                color="white" 
                _hover={{opacity: "70%"}} 
                >Train with Katy
                 </Button>
              </Center>


             <Featured /> 
              
              <Heading p="2rem">
                  The Latest And Greatest
              </Heading>
            <Grid templateColumns="repeat(3, 1fr)">

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

