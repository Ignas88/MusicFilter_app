import { GET_FORM_DATA } from "../actions/types";

const initialState = {
  formData: {
    priceFormData: {
      A: {
        checked: false,
        min: 0,
        max: 5
      },
      B: {
        checked: false,
        min: 5,
        max: 10
      },
      C: {
        checked: false,
        min: 10,
        max: 15
      },
      D: {
        checked: false,
        min: 15,
        max: 20
      }
    },
    yearFormData: {
      E: {
        checked: false,
        year: 2000
      },
      F: {
        checked: false,
        year: 2015
      },
      G: {
        checked: false,
        year: 2017
      },
      H: {
        checked: false,
        year: 2018
      }
    }
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FORM_DATA:
      return {
        ...state
      };
    default:
      return state;
  }
}