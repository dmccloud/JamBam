const client = "52f777e612e64e1390237e9da1dabc81";
const redirect = "http://localhost:3000";

const accessToken: { token: string | null; expire: number } = {
  token: null,
  expire: 0,
};

export const getAccessToken = () => {
  if (accessToken.token) {
    console.log("exists: ", accessToken);
    return accessToken;
  } else {
    const token = window.location.href.match(/access_token=([^&]*)/);
    const expire = window.location.href.match(/expires_in=([^&]*)/);
    console.log(token);
    console.log(expire);
    if (token && expire) {
      accessToken.token = token[0];
      accessToken.expire = parseInt(expire[1]);
      console.log("added: ", accessToken);
      window.setTimeout(
        () => (accessToken.token = ""),
        accessToken.expire * 1000
      );
      window.history.pushState("Access Token", "", "/");
    }
  }
  window.location.href = `https://accounts.spotify.com/authorize?client_id=${client}&redirect_uri=${redirect}&scope=user-read-private%20user-read-email&response_type=token&state=123`;
};
