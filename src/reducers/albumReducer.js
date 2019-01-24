import { GET_ALBUMS, FILTER_ALBUMS } from "../actions/types";

const initialState = {
  albums: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        albums: action.payload
      };
    case FILTER_ALBUMS:
      console.log(action);
      let albums = state.albums;
      albums = albums.filter((album) => {
        return album['im:price'].attributes.amount > 15
      });
      console.log(albums);
      return {
        ...state,
        albums
      };
    default:
      return state;
  }
}