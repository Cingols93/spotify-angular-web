import { GlobalConstants } from "./global-constants";

const scopes = [
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-email",
    "streaming",
    "user-read-private",
    "user-library-read",
    "user-top-read",
    //"user-library-modify",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-follow-read"
].join(",");

const params = {
    scope: scopes
}

const queryString = new URLSearchParams(params).toString();

const LOGIN_URL = `https://accounts.spotify.com/authorize?client_id=${GlobalConstants.PUBLIC_CLIENT_ID}&response_type=code&redirect_uri=${GlobalConstants.REDIRECT_URI}&show_dialog=true&${queryString}`;

const TOKEN_URL = "https://accounts.spotify.com/api/token";

export { LOGIN_URL, TOKEN_URL };