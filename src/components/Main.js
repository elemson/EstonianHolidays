import React from "react";

import { Calender } from "./calender/calender.component";

import EventInput from "./eventInput/event-Input.component";

export const Main = () => {
  return (
    <div className="wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <EventInput />
                  <Calender />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
