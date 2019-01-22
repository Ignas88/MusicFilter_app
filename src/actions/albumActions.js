import axios from 'axios';
import {GET_ALBUMS} from "./types";

export const getAlbums = () => async dispatch => {
  const res = await axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
  dispatch({
    type: GET_ALBUMS,
    payload: res.data
  })
};