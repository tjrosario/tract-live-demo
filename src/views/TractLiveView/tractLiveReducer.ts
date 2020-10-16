import { IEvent, IUser } from '../../common/types'
import TractLiveActions, { Types } from './TractLiveActions'

type State = {
	tractLiveEvent: IEvent
	user: IUser
}

const tractLiveReducer = (state: State, action: TractLiveActions): State => {
	switch (action.type) {
		case Types.SET_EVENT:
			return {
				...state,
				tractLiveEvent: action.payload.tractLiveEvent,
			}

		case Types.SET_USER:
			return {
				...state,
				user: action.payload.user,
			}

		default:
			return state
	}
}

export default tractLiveReducer
