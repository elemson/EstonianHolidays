import React, { useEffect } from "react";
import SearchEvent from "../../components/eventInput/event-Input.component";

export const Sidebar = () => {
  return (
    <div className="col-lg-2">
      <div className="m-t-20">
        <br />
      </div>
      <SearchEvent />
    </div>
  );
};
