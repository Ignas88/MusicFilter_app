import { GET_ALBUMS } from "../actions/types";

const initialState = {
  albums: [
    // {
    //   title: 'rbr5tybtybntybn',
    //   price: '99'
    // },
    // {
    //   title: 'ttttttttttt',
    //   price: '22'
    // },
    // {
    //   title: 'ttt',
    //   price: '11'
    // }
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALBUMS:
      // console.log(action.payload);
      return {
        ...state,
        albums: action.payload
      };
    default:
      return state;
  }
}