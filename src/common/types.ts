export interface IUser {
  image: string;
  id: string;
  name: string;
  username?: string;
}

export interface IVideo {
  src: string;
}

export interface IDescription {
  id: number | string;
  value: string | number | Date;
}

export interface IEventMetaData {
  description: IDescription[];
  end_time: Date | string;
  host: Partial<IUser>;
  start_time: Date | string;
  title: string;
}

export interface IChatChannel {
  channelType: string;
  channelID: string;
}

export interface IEvent {
  chat: {
    channel: IChatChannel;
  };
  metadata: IEventMetaData;
  video: IVideo;
}
