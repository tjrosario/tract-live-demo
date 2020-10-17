import React, {
    useContext 
} from 'react';
import {
    Box 
} from '@chakra-ui/core';
import {
    TractLiveContext 
} from './TractLiveContext';
import YouTubePlayer from '../../components/YouTubePlayer';

const TractLiveVideoPlayer: React.FC = (): JSX.Element => {
    const {
        tractLiveEvent: {
            metadata: {
                title 
            },
            video: {
                src 
            }
        }
    } = useContext(TractLiveContext);

    return (
        <Box backgroundColor={"gray.200"}
            borderRadius={"lg"}
            overflow={"hidden"}>
            <YouTubePlayer src={src}
                title={title} />
        </Box>
    );
};

export default TractLiveVideoPlayer;
