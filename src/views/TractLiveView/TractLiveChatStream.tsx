import React, {
    useContext 
} from 'react';
import {
    Box 
} from '@chakra-ui/core';
import ChatStream from '../../components/ChatStream';
import {
    TractLiveContext 
} from './TractLiveContext';

/**
 * Tract Live! chat stream component
 */
const TractLiveChatStream: React.FC = (): JSX.Element => {
    const {
        tractLiveEvent, user 
    } = useContext(TractLiveContext);

    return (
        <Box as={"section"}>
            {user.id ? (
                <ChatStream event={tractLiveEvent}
                    user={user} />
            ) : null}
        </Box>
    );
};

export default TractLiveChatStream;
