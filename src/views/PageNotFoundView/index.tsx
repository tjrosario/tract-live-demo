import React from 'react';
import {
    Box, Heading, Text 
} from '@chakra-ui/core';

/**
 * Page not found (404) view
 */
const PageNotFoundView: React.FC = (): JSX.Element => {
    return (
        <Box>
            <Heading as={"h1"}
                marginBottom={{
                    sm: 1 
                }}
                size={"md"}>
                Whoops!
            </Heading>
            <Text as={"p"}>Page not found.</Text>
        </Box>
    );
};

export default PageNotFoundView;
