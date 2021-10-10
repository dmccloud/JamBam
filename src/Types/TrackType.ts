type TrackType = {
  id: number;
  name: string;
  artist: string;
  album: string;
  uri: string;
};

export type TrackResponseType = {
  id: number;
  name: string;
  artists: { name: string }[];
  album: { name: string };
  uri: string;
};

export default TrackType;
