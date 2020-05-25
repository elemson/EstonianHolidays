import { SEARCH_EVENT } from "../types";
import axios from "axios";

export const searchEvent = (event) => (dispatch) => {
  console.log(event);
  axios
    .post(
      "https://wozmx9dh26.execute-api.eu-west-1.amazonaws.com/api/holidays",
      event
    )
    .then((res) => {
      if (res.data.holidays) {
        dispatch(searchEventActionCreator(res.data.holidays));
        console.log(res.data.holidays);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

export const searchEventActionCreator = (result) => ({
  type: SEARCH_EVENT,
  payload: result,
});
