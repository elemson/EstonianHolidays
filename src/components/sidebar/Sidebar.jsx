import React from "react";
import SearchEvent from "../modal/SearchEvent";

export const Sidebar = () => {
  return (
    <div className="col-lg-3">
      <button
        data-toggle="modal"
        data-target="#search-event"
        className="btn btn-primary btn-block"
      >
        Search New Event
      </button>

      <div className="m-t-20">
        <br />
      </div>
      <SearchEvent />
    </div>
  );
};
