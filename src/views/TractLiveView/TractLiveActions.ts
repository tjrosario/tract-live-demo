import ActionMap from '../../common/ActionMap'
import { IEvent, IUser } from '../../common/types'

export enum Types {
	SET_EVENT = 'SET_EVENT',
	SET_USER = 'SET_USER',
}

type TractLivePayload = {
	[Types.SET_EVENT]: {
		tractLiveEvent: IEvent
	}

	[Types.SET_USER]: {
		user: IUser
	}
}

type TractLiveActions = ActionMap<TractLivePayload>[keyof ActionMap<
	TractLivePayload
>]

export default TractLiveActions
