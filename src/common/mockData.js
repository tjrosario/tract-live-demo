export const MODEL = {
	tractLiveEvent: {
		metadata: {
			description: [],
			host: {
				image: '',
				name: '',
			},
			title: '',
			start_time: '',
			end_time: '',
		},
		video: {
			src: '',
		},
		chat: {
			channel: {
				channelType: '',
				channelID: '',
			},
		},
	},
	user: {
		image: '',
		id: '',
		name: '',
		username: '',
	},
}

export const STUB = {
	tractLiveEvent: {
		metadata: {
			description: [
				{
					id: 0,
					value:
						'Time Out New York Editor Carla Sosenko sits down with Food & Drink Editor Christina Izzo and Assistant Food & Drink Editor Dan Dao to discuss what it takes to become a master food critic.',
				},
				{
					id: 1,
					value:
						'Bacon ipsum dolor amet sirloin sausage tongue meatloaf, chicken burgdoggen ham hock cow strip steak shank short ribs hamburger.',
				},
			],
			host: {
				image:
					'https://cdn.costumewall.com/wp-content/uploads/2017/06/charlie-brown.jpg',
				name: 'Charlie Brown',
			},
			title: 'Learn how to be come the next great food critic!',
			start_time: '',
			end_time: '',
		},
		video: {
			src: 'https://www.youtube.com/embed/2iRcOuoMsB0',
		},
		chat: {
			channel: {
				channelType: 'messaging',
				channelID: 'godevs',
			},
		},
	},
	user: {
		image: 'https://getstream.io/random_png/?id=odd-frog-8&name=Odd+frog',
		id: 'odd-frog-8',
		name: 'Tommy Rosario',
		username: 'trosario',
	},
}
