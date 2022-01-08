import React from 'react'
import {Box, Link, Text} from '@chakra-ui/react'


export default function MiniBar() {
    return (
       
    <Box backgroundColor="gray.100" h="4rem"  w="100%" alignItems="center">
        <Text 
        className="tracking-in-expand "
        fontWeight="bold"
        fontSize=".75rem"
        textAlign="center"
        >Save Up To 40%
        </Text>

        <Text 
        className="tracking-in-expand "
        fontWeight="bold"
        textDecoration="underline"
        fontSize=".75rem" 
        textAlign="center">

        <Link>Shop All Our New Markdowns</Link>
        </Text>
    </Box>
    )
}

