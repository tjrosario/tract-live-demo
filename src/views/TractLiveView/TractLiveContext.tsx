import React, {
    ReactNode, createContext, useReducer 
} from 'react';
import tractLiveReducer from './tractLiveReducer';
import {
    Types 
} from './TractLiveActions';
import {
    MODEL 
} from '../../common/mockData';
import {
    IEvent, IUser 
} from '../../common/types';

interface ITractLiveProviderProps {
  children: ReactNode;
}

interface ITractLiveContextProps {
  tractLiveEvent: IEvent;
  user: IUser;
  setEvent(tractLiveEvent: IEvent): void | undefined;
  setUser(user: IUser): void | undefined;
}

const initialState = {
    setEvent: () => undefined,
    setUser: () => undefined,
    tractLiveEvent: MODEL.tractLiveEvent,
    user: MODEL.user
};

export const TractLiveContext = createContext<ITractLiveContextProps>(
    initialState
);

/**
 * Main app context provider 
 */
export const TractLiveProvider: React.FC<ITractLiveProviderProps> = ({
    children
}): JSX.Element => {
    const [state, dispatch] = useReducer(tractLiveReducer, initialState);

    const providerValue = {
        setEvent: (tractLiveEvent: IEvent) => {
            dispatch({
                payload: {
                    tractLiveEvent 
                },
                type: Types.SET_EVENT
            });
        },
        setUser: (user: IUser) => {
            dispatch({
                payload: {
                    user 
                },
                type: Types.SET_USER
            });
        },
        tractLiveEvent: state.tractLiveEvent,
        user: state.user
    };

    return (
        <TractLiveContext.Provider value={providerValue}>
            {children}
        </TractLiveContext.Provider>
    );
};
