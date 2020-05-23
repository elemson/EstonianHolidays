import React, { useState } from "react";
import SearchForm from "./SearchForm";
import moment from "moment";
import { searchEvent } from "../../redux/event/event.actions";
import { useDispatch } from "react-redux";

const SearchEvent = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const inputChange = (event) => {
    console.log(event.target.value);
  };

  const onInputChange = (propertyName) => (event) => {
    console.log(propertyName);
    console.log(event);
    if (propertyName === "startdate") {
      setStartDate(event);
    }
    if (propertyName === "enddate") {
      setEndDate(event);
    }
  };
  const handleChange = () => {};

  const onClick = () => {
    const event = setEvent();
    //add event to events array using context
    // console.log(event);
    dispatch(searchEvent(event));
  };

  const reset = () => {
    setStartDate(new Date());
    setEndDate(new Date());
  };

  const setEvent = () => {
    let start = "";
    let end = "";

    start = `${moment(startDate).format("YYYY-MM-DD")}`;
    end = `${moment(startDate).format("YYYY-MM-DD")}`;

    const event = {
      start,
      end,
    };

    return event;
  };
  const closeModal = () => {
    reset();
  };
  return (
    <>
      <div>
        <SearchForm
          modalId="search-event"
          title="search event"
          closeModal={closeModal}
          inputChange={inputChange}
          startDate={startDate}
          endDate={endDate}
          onInputChange={onInputChange}
          handleChange={handleChange}
          eventType={onClick}
          buttonText="save"
        />{" "}
      </div>
    </>
  );
};

export default SearchEvent;
