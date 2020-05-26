import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useSelector } from "react-redux";

import bootstrapPlugin from "@fullcalendar/bootstrap";
import { weekRange } from "../../utils/weekRange";

export const Calender = () => {
  //get event state from store
  const event = useSelector((state) => state.search.event);

  //Format incoming data structure to  be compatible with Calendar component
  //raw data
  let rawData = Object.keys(event).map(function (key) {
    return [key, event[key]];
  });
  //fortmated data
  const newFormat = rawData.map((res) => ({
    start: res[0],
    title: res[1][0].name,
  }));

  return (
    <div className="col-lg-9">
      <div>
        <FullCalendar
          defaultView="dayGridWeek"
          validRange={function (nowDate) {
            //constrain calender range to one month from current date(2weeks before, 2 weeks after)
            return {
              start: weekRange(2, "before"),
              end: weekRange(2, "after"),
            };
          }}
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            bootstrapPlugin,
          ]}
          themeSystem="bootstrap"
          header={{
            left: "prev, next today",
            center: "title",
            right: "dayGridWeek, dayGridMonth ",
          }}
          weekNumbers="true"
          events={newFormat}
        />
      </div>
    </div>
  );
};
