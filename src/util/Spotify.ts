import axios from "axios";
import UserType from "../Types/UserType";
import TrackType, { TrackResponseType } from "../Types/TrackType";

const client = "52f777e612e64e1390237e9da1dabc81";
const redirect = "https://jambam.surge.sh";

export const getAccessToken = (userObj: UserType, setter: any) => {
  const tokenStr = window.location.href.match(/access_token=([^&]*)/);
  const expireStr = window.location.href.match(/expires_in=([^&]*)/);
  if (userObj.token) {
  } else {
    if (tokenStr && expireStr) {
      const token = tokenStr[1];
      const expire = parseInt(expireStr[1]);
      const newObj = { token, expire };
      setter(newObj);
      window.setTimeout(() => (newObj.token = ""), expire * 1000);
      window.history.pushState("Access Token", "", "/");
    } else {
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${client}&redirect_uri=${redirect}&scope=user-read-private%20playlist-modify-public%20playlist-modify-private%20user-read-email&response_type=token&state=123`;
    }
  }
};

export const trackSearch = async (
  term: string,
  userObj: UserType,
  setter: any
) => {
  const tracks: any = await axios.get(
    `https://api.spotify.com/v1/search?type=track&q=${term}`,
    {
      headers: {
        authorization: `Bearer ${userObj.token}`,
      },
    }
  );

  const trackArray: TrackType[] = tracks.data.tracks.items.map(
    (track: TrackResponseType) => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri,
    })
  );
  setter(trackArray);
};

export const saveToSpotify = async (
  token: string | null,
  playlistName: string,
  trackUris: string[]
) => {
  if (!playlistName || trackUris.length === 0) {
    console.log("nah brah");
    return;
  }
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const userInfo: { data: { id: string } } = await axios.get(
    "https://api.spotify.com/v1/me",
    {
      headers: headers,
    }
  );
  if (userInfo.data.id) {
    const playlistObj: { data: { id: string } } = await axios.post(
      `https://api.spotify.com/v1/users/${userInfo.data.id}/playlists`,
      { name: playlistName },
      {
        headers: headers,
      }
    );
    if (playlistObj.data.id) {
      axios.post(
        `https://api.spotify.com/v1/users/${userInfo.data.id}/playlists/${playlistObj.data.id}/tracks`,
        { uris: trackUris },
        {
          headers: headers,
        }
      );
      console.log("saved, yo");
    } else {
      console.log("error saving tracks to playlist");
    }
  } else {
    console.log("Error fetching user information");
  }
};
