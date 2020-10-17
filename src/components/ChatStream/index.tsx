import React, {
    useEffect, useMemo, useState 
} from 'react';
import {
    Channel,
    ChannelHeader,
    Chat,
    MessageInput,
    MessageList,
    Thread,
    Window
} from 'stream-chat-react';

import {
    StreamChat, UserResponse 
} from 'stream-chat';
import 'stream-chat-react/dist/css/index.css';
import {
    IEvent, IUser 
} from '../../common/types';

import './styles.scss';

interface IChatStream {
  event: IEvent;
  user: IUser;
}

const chatClient = new StreamChat(
    process.env.REACT_APP_STREAM_CHAT_CLIENT || ''
);
const userToken = process.env.REACT_APP_STREAM_CHAT_USER_TOKEN || '';

/**
 * Chat stream component that uses Stream Chat
 * https://getstream.io/chat/
 */
const ChatStream: React.FC<IChatStream> = ({
    event, user 
}) => {
    const {
        chat: {
            channel: {
                channelID, channelType 
            }
        }
    } = event;

    const chatUser: UserResponse = {
        ...user
    };

    const [chatChannel, setChatChannel] = useState();
    const memoUser = useMemo(() => user, [user]);
    const memoChatUser = useMemo(() => chatUser, [chatUser]);

    // Set chat user
    useEffect(() => {
        chatClient.setUser(memoChatUser, userToken);
    }, [memoUser]);

    // Set chat channel
    useEffect(() => {
        const channel: any = chatClient.channel(channelType, channelID);
        setChatChannel(channel);
    }, [channelType, channelID]);

    return (
        <Chat client={chatClient}
            theme={"messaging light"}>
            <Channel channel={chatChannel}>
                <Window>
                    <ChannelHeader />
                    <MessageList />
                    <MessageInput />
                </Window>
                <Thread />
            </Channel>
        </Chat>
    );
};

export default ChatStream;
