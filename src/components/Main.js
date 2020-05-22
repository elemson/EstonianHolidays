import React from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { Calender } from "./calender/Calender";

export const Main = () => {
  return (
    <div className="wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <Sidebar />
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
