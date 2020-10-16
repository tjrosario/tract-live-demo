import React, { useCallback, useContext, useEffect, useMemo } from 'react'
import { Box, Grid } from '@chakra-ui/core'
import TractLiveVideoPlayer from './TrackLiveVideoPlayer'
import TractLiveMetaData from './TractLiveMetaData'
import TractLiveChatStream from './TractLiveChatStream'
import { TractLiveContext } from './TractLiveContext'
import { STUB } from '../../common/mockData'

const TractLiveMain: React.FC = (): JSX.Element => {
	const { tractLiveEvent, user, setEvent, setUser } = useContext(
		TractLiveContext
	)

	const memoUser = useMemo(() => user, [user])
	const memuSetEvent = useCallback(setEvent, [])
	const memoSetUser = useCallback(setUser, [])

	useEffect(() => {
		memuSetEvent(STUB.tractLiveEvent)
	}, [tractLiveEvent.video.src, memuSetEvent])

	useEffect(() => {
		memoSetUser(STUB.user)
	}, [memoUser, memoSetUser])

	return (
		<Grid templateColumns={{ md: '70% 30%' }} gap={6}>
			<Box w="100%">
				<TractLiveVideoPlayer />
				<TractLiveMetaData />
			</Box>
			<Box w="100%">
				<TractLiveChatStream />
			</Box>
		</Grid>
	)
}

export default TractLiveMain
