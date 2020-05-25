import React, { useState, useEffect, useCallback } from "react";
import SearchForm from "../../pages/event-input/event-input-form";
import moment from "moment";
import { searchEvent } from "../../redux/event/event.actions";
import { useDispatch } from "react-redux";

const EventInput = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(new Date().setMonth(startDate.getMonth() + 1))
  );

  const setEvent = useCallback(() => {
    // "apiKey": "_API_KEY"
    let start = "";
    let end = "";

    start = `${moment(startDate).format("YYYY-MM-DD")}`;
    end = `${moment(endDate).format("YYYY-MM-DD")}`;

    const event = {
      apiKey: "d974b1989b20a58721d3bf38671c3951",
      startDate: start,
      endDate: end,
    };

    return event;
  });

  useEffect(() => {
    const event = setEvent();
    //add event to events array using context

    dispatch(searchEvent(event));
  }, [dispatch, setEvent]);

  return <></>;
};

export default EventInput;
