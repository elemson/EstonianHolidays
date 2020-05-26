import React, { useState, useEffect } from "react";

import moment from "moment";
import { requestEvent } from "../../redux/event/event.actions";
import { useDispatch } from "react-redux";
import { weekRange } from "../../utils/weekRange";

const EventInput = () => {
  const dispatch = useDispatch();

  let start = weekRange(2, "before");
  const [startDate, setStartDate] = useState(start);

  let end = weekRange(2, "after");
  const [endDate, setEndDate] = useState(end);

  //Format date to "YYYY-MM-DD" with moment
  start = `${moment(startDate).format("YYYY-MM-DD")}`;
  end = `${moment(endDate).format("YYYY-MM-DD")}`;

  //Dispatch redux action on component mount
  useEffect(() => {
    const setEvent = () => {
      const event = {
        apiKey: process.env.REACT_APP_API_KEY,
        startDate: start,
        endDate: end,
      };

      return event;
    };
    const event = setEvent();
    dispatch(requestEvent(event));
  }, [dispatch, end, start]);

  return <></>;
};

export default EventInput;
