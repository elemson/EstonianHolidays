import { SEARCH_EVENT } from "../types";

const INTITIAL_STATE = {
  event: null,
};

const searchEventReducer = (state = INTITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_EVENT:
      return {
        ...state,
        event: action.payload,
      };

    default:
      return state;
  }
};

export default searchEventReducer;
