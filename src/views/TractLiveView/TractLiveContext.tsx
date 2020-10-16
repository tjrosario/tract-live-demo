import React, { useReducer, createContext, ReactNode } from 'react'
import tractLiveReducer from './tractLiveReducer'
import { Types } from './TractLiveActions'
import { MODEL } from '../../common/mockData'
import { IEvent, IUser } from '../../common/types'

interface ITractLiveProviderProps {
	children: ReactNode
}

interface ITractLiveContextProps {
	tractLiveEvent: IEvent
	user: IUser
	setEvent(tractLiveEvent: IEvent): void | undefined
	setUser(user: IUser): void | undefined
}

const initialState = {
	tractLiveEvent: MODEL.tractLiveEvent,
	user: MODEL.user,
	setEvent: () => {},
	setUser: () => {},
}

export const TractLiveContext = createContext<ITractLiveContextProps>(
	initialState
)

export const TractLiveProvider: React.FC<ITractLiveProviderProps> = ({
	children,
}): JSX.Element => {
	const [state, dispatch] = useReducer(tractLiveReducer, initialState)

	const providerValue = {
		tractLiveEvent: state.tractLiveEvent,
		user: state.user,
		setEvent: (tractLiveEvent: IEvent) => {
			dispatch({ type: Types.SET_EVENT, payload: { tractLiveEvent } })
		},
		setUser: (user: IUser) => {
			dispatch({ type: Types.SET_USER, payload: { user } })
		},
	}

	return (
		<TractLiveContext.Provider value={providerValue}>
			{children}
		</TractLiveContext.Provider>
	)
}
