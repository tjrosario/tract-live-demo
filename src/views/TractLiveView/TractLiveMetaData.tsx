import React, { useContext } from 'react'
import { Avatar, Box, Button, Heading, Stack, Text } from '@chakra-ui/core'
import { TractLiveContext } from './TractLiveContext'
import { IDescription } from '../../common/types'

const TractLiveMetaData: React.FC = (): JSX.Element => {
	const { tractLiveEvent } = useContext(TractLiveContext)

	return (
		<Box as="section" display={{ md: 'flex' }}>
			<Avatar
				name={tractLiveEvent.metadata?.host?.name}
				src={tractLiveEvent.metadata?.host?.image}
				marginRight="4"
				marginTop="5"
				size="md"
			/>

			<Box>
				<Box
					as="header"
					borderBottom="1px"
					borderBottomColor="#ddd"
					borderBottomStyle="solid"
					display={{ md: 'flex' }}
					marginBottom={5}
					paddingY={{ sm: 3, md: 5 }}
				>
					<Box flexGrow={1} marginBottom={{ sm: 3 }}>
						<Heading as="h2" size="md" marginBottom={{ sm: 1 }}>
							{tractLiveEvent.metadata?.title}
						</Heading>
						<Text as="p">
							Hosted by {tractLiveEvent.metadata?.host?.name}
						</Text>
					</Box>

					<Stack spacing={2} isInline>
						<Button
							borderRadius="full"
							color="blackAlpha.800"
							variant="outline"
							size="sm"
						>
							Follow
						</Button>
						<Button
							color="white"
							backgroundColor="blue.700"
							borderRadius="full"
							size="sm"
							_hover={{ bg: 'blue.500' }}
						>
							Add to My List
						</Button>
					</Stack>
				</Box>

				{tractLiveEvent.metadata?.description.map(
					(para: IDescription) => (
						<Text as="p" marginBottom={5} key={para.id}>
							{para.value}
						</Text>
					)
				)}
			</Box>
		</Box>
	)
}

export default TractLiveMetaData
