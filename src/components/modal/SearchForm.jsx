import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchForm = (props) => {
  const {
    modalId,
    title,
    closeModal,
    eventname,
    inputChange,
    checkbox,
    onCheckBoxChange,
    showtime,
    startDate,
    endDate,
    onInputChange,
    color,
    colors,
    handleChange,
    eventType,
    buttonText,
    colorObj,
  } = props;
  return (
    <div>
      <div class="modal" id="search-event" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{title}</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="form-group">
                <label>Start</label>
                <div className="row">
                  <div className="col-md-12">
                    <DatePicker
                      timeIntervals={1}
                      dateFormat="Pp"
                      selected={startDate}
                      onChange={onInputChange("startdate")}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label">End</label>
                <div className="row">
                  <div className="col-md-12">
                    {" "}
                    <DatePicker
                      dateFormat="Pp"
                      selected={endDate}
                      onChange={onInputChange("enddate")}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary save"
                data-dismiss="modal"
                onClick={eventType}
                disabled={!startDate || !endDate}
              >
                {buttonText}
              </button>
              <button
                type="button"
                class="btn btn-light cancel"
                data-dismiss="modal"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
