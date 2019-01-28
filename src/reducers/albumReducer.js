import {GET_ALBUMS, FILTER_ALBUMS} from "../actions/types";

const initialState = {
  initialAlbums: [],
  filteredAlbums: null
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
      let albums = state.initialAlbums;

      if (action.payload.price && action.payload.price.length > 0) {
        albums = albums.filter((album) => {
          const itemPrice = album['im:price'].attributes.amount;
          const priceFilters = action.payload.price.filter((price) => {
            return itemPrice > price.min && itemPrice < price.max;

          });
          return priceFilters.length > 0;
        });
      }

      if (action.payload.year && action.payload.year > 0) {
        albums = albums.filter((album) => {
          const year = new Date(album['im:releaseDate'].attributes.label);
          return action.payload.year.indexOf(year.getFullYear()) !== -1;
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