import React, {
    ReactText,
    useContext 
} from 'react';
import {
    Avatar, Box, Button, Heading, Stack, Text 
} from '@chakra-ui/core';
import {
    TractLiveContext 
} from './TractLiveContext';
import {
    IDescription 
} from '../../common/types';

// Quick n dirty timestamp
const timestamp = (epoch: ReactText) => new Date(epoch).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute:'2-digit',
    timeZoneName: 'short'
})

/**
 * Tract Live! meta data component 
 */
const TractLiveMetaData: React.FC = (): JSX.Element => {
    const {
        tractLiveEvent 
    } = useContext(TractLiveContext);

    return (
        <Box as={"section"}
            display={{
                md: 'flex' 
            }}>
            <Avatar
                marginRight={"4"}
                marginTop={"5"}
                name={tractLiveEvent.metadata?.host?.name}
                size={"md"}
                src={tractLiveEvent.metadata?.host?.image}
            />

            <Box>
                <Box
                    as={"header"}
                    borderBottom={"1px"}
                    borderBottomColor={"#ddd"}
                    borderBottomStyle={"solid"}
                    display={{
                        md: 'flex' 
                    }}
                    marginBottom={5}
                    paddingY={{
                        md: 5,
                        xs: 3
                    }}
                >
                    <Box flexGrow={1}
                        marginBottom={{
                            xs: 3 
                        }}>
                        <Heading as={"h2"}
                            marginBottom={{
                                xs: 1 
                            }}
                            size={"md"}>
                            {tractLiveEvent.metadata?.title}
                        </Heading>
                        <Text as={"p"}
                            color={"gray.600"}
                            fontSize={"sm"}
                            fontWeight={"bold"}>Hosted by {tractLiveEvent.metadata?.host?.name} 
                            <Text as={'span'}>
                                &nbsp;&bull;&nbsp;
                                {timestamp(tractLiveEvent?.metadata?.start_time)} - {timestamp(tractLiveEvent?.metadata?.end_time)}
                            </Text>
                        </Text>
                    </Box>

                    <Stack isInline
                        spacing={2}>
                        <Button
                            borderRadius={"full"}
                            color={"blackAlpha.800"}
                            size={"sm"}
                            variant={"outline"}
                        >
                            Follow
                        </Button>
                        <Button
                            _hover={{
                                bg: 'blue.500' 
                            }}
                            backgroundColor={"blue.700"}
                            borderRadius={"full"}
                            color={"white"}
                            size={"sm"}
                        >
                            Add to My List
                        </Button>
                    </Stack>
                </Box>

                {tractLiveEvent.metadata?.description.map((para: IDescription) => (
                    <Text as={"p"}
                        key={para.id}
                        marginBottom={5}>
                        {para.value}
                    </Text>
                ))}
            </Box>
        </Box>
    );
};

export default TractLiveMetaData;
