import { GET_ALBUMS, FILTER_ALBUMS } from "../actions/types";

const initialState = {
  initialAlbums: [],
  filteredAlbums: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        initialAlbums: action.payload,
        filteredAlbums: state.filteredAlbums
      };
    case FILTER_ALBUMS:
      console.log(action);
      let albums = state.initialAlbums;

      if (action.payload.price.min || action.payload.price.max) {
        albums = albums.filter((album) => {
          return album['im:price'].attributes.amount >= action.payload.price.min && album['im:price'].attributes.amount <= action.payload.price.max;
        });
      }

      if (action.payload.year) {
        albums = albums.filter((album) => {
          const year = new Date(album['im:releaseDate'].attributes.label);
          return year.getFullYear() === action.payload.year;
        });
      }

      return {
        ...state,
        filteredAlbums: albums
      };
    default:
      return state;
  }
}