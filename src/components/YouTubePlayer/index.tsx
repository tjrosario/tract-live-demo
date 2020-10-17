import React from 'react';
import {
    Box 
} from '@chakra-ui/core';

interface IYouTubePlayer {
  allow?: string;
  allowFullScreen?: boolean;
  frameBorder?: number;
  src?: string;
  title?: string;
}

const YouTubePlayer: React.FC<IYouTubePlayer> = ({
    allow,
    allowFullScreen,
    frameBorder,
    src,
    title
}) => {
    return (
        <Box
            h={"0"}
            maxW={"100%"}
            overflow={"hidden"}
            pb={"56.25%"}
            pos={"relative"}
            w={"100%"}
        >
            <iframe
                allow={allow}
                allowFullScreen={allowFullScreen}
                frameBorder={frameBorder}
                src={src}
                style={{
                    height: '100%',
                    left: 0,
                    position: 'absolute',
                    top: 0,
                    width: '100%'
                }}
                title={title}
            />
        </Box>
    );
};

YouTubePlayer.defaultProps = {
    allow:
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
    allowFullScreen: true,
    frameBorder: 0,
    src: '',
    title: ''
};

export default YouTubePlayer;
