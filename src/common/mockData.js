export const MODEL = {
    tractLiveEvent: {
        chat: {
            channel: {
                channelID: '',
                channelType: ''
            }
        },
        metadata: {
            description: [],
            end_time: '',
            host: {
                image: '',
                name: ''
            },
            start_time: '',
            title: ''
        },
        video: {
            src: ''
        }
    },
    user: {
        id: '',
        image: '',
        name: '',
        username: ''
    }
};

export const STUB = {
    tractLiveEvent: {
        chat: {
            channel: {
                channelID: 'godevs',
                channelType: 'messaging'
            }
        },
        metadata: {
            description: [
                {
                    id: 0,
                    value:
            'Time Out New York Editor Carla Sosenko sits down with Food & Drink Editor Christina Izzo and Assistant Food & Drink Editor Dan Dao to discuss what it takes to become a master food critic.'
                },
                {
                    id: 1,
                    value:
            'Bacon ipsum dolor amet sirloin sausage tongue meatloaf, chicken burgdoggen ham hock cow strip steak shank short ribs hamburger.'
                }
            ],
            end_time: 1602973800000,
            host: {
                image:
          'https://cdn.costumewall.com/wp-content/uploads/2017/06/charlie-brown.jpg',
                name: 'Charlie Brown'
            },
            start_time: 1602970200000,
            title: 'Learn how to be come the next great food critic!'
        },
        video: {
            src: 'https://www.youtube.com/embed/2iRcOuoMsB0'
        }
    },
    user: {
        id: 'odd-frog-8',
        image: 'https://getstream.io/random_png/?id=odd-frog-8&name=Odd+frog',
        name: 'Tommy Rosario',
        username: 'trosario'
    }
};
