import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useSelector } from "react-redux";

import bootstrapPlugin from "@fullcalendar/bootstrap";

export const Calender = () => {
  const event = useSelector((state) => state.search.event);

  //Format incoming data structure to  be compatible with Calendar component

  let rawData = Object.keys(event).map(function (key) {
    return [key, event[key]];
  });

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
            return {
              start: nowDate,
              end: new Date(new Date().setMonth(nowDate.getMonth() + 1)),
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
