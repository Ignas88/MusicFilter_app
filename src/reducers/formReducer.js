import { GET_FORM_DATA } from "../actions/types";

const initialState = {
  formData: {
    priceFormData: {
      A: {
        label: '0 - 5',
        checked: false
      },
      B: {
        label: '5 - 10',
        checked: false
      },
      C: {
        label: '10 - 15',
        checked: false
      },
      D: {
        label: '15 - 20',
        checked: false
      }
    },
    yearFormData: {
      E: {
        label: '2000',
        checked: false
      },
      F: {
        label: '2015',
        checked: false
      },
      G: {
        label: '2017',
        checked: false
      },
      H: {
        label: '2018',
        checked: false
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