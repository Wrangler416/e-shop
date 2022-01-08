import React from 'react'
import {Box, Center, Flex, Button, Image} from '@chakra-ui/react'
import chick from '../imgs/chick.png'
import fitchick from '../imgs/fitchick.jpeg'
import RichText from "./RichText"
import {Link} from 'react-router-dom'
import AllProducts from '../components/AllProducts'


export default function Featured({reverse}) {
    const boxesReverse = reverse ? 'row-reverse' : 'row'

    return (

      <Box>
         <RichText />
        <Flex flexDir={['column', boxesReverse]} w="100%">
          <Image src={chick}  p="1rem" objectFit="cover" w={['100%', '50%']}/>
          <Image src={fitchick}  p="1rem" objectFit="cover" w={['100%', '50%']}/>
        </Flex>

        <Center>
          <Link to="/products/" component={<AllProducts />}>
        <Button 
            w="10rem"
            margin="1rem"
            backgroundColor="black"
            color="white"
            textAlign="center"
            _hover={{opacity: "80%"}}
          >Shop Now
          </Button>
          </Link>
          </Center>
        
     
          
      </Box>
    )
}

