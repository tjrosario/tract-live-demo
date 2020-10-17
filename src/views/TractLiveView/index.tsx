import React from 'react';
import {
    TractLiveProvider 
} from './TractLiveContext';
import TractLiveMain from './TractLiveMain';

const TractLiveView: React.FC = (): JSX.Element => {
    return (
        <TractLiveProvider>
            <TractLiveMain />
        </TractLiveProvider>
    );
};

export default TractLiveView;
