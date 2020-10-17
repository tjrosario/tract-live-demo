import React, {
    useCallback, useContext, useEffect, useMemo 
} from 'react';
import {
    Box, Grid 
} from '@chakra-ui/core';
import TractLiveVideoPlayer from './TrackLiveVideoPlayer';
import TractLiveMetaData from './TractLiveMetaData';
import TractLiveChatStream from './TractLiveChatStream';
import {
    TractLiveContext 
} from './TractLiveContext';
import {
    STUB 
} from '../../common/mockData';

/**
 * Tract Live! main component grid that houses video player, meta data 
 * and chat stream
 */
const TractLiveMain: React.FC = (): JSX.Element => {
    const {
        setEvent, setUser , tractLiveEvent, user 
    } = useContext(
        TractLiveContext
    );

    const memoUser = useMemo(() => user, [user]);
    const memuSetEvent = useCallback(setEvent, []);
    const memoSetUser = useCallback(setUser, []);

    useEffect(() => {
        memuSetEvent(STUB.tractLiveEvent);
    }, [tractLiveEvent.video.src, memuSetEvent]);

    useEffect(() => {
        memoSetUser(STUB.user);
    }, [memoUser, memoSetUser]);

    return (
        <Grid gap={6}
            templateColumns={{
                md: '70% 30%' 
            }}>
            <Box w={"100%"}>
                <TractLiveVideoPlayer />
                <TractLiveMetaData />
            </Box>
            <Box w={"100%"}>
                <TractLiveChatStream />
            </Box>
        </Grid>
    );
};

export default TractLiveMain;
