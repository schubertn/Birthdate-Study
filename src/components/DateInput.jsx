import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { Navigate } from "react-router-dom";

DateInput.propTypes = {
  inputMethod: PropTypes.string,
  onInputDate: PropTypes.func,
  date: PropTypes.string,
};

export default function DateInput(props) {
  // create an array of all days
  const createDayArray = () => {
    var dayArray = [];
    for (var i = 1; i < 32; i++) {
      if (i < 10) {
        dayArray.push("0" + i);
      } else {
        dayArray.push(i.toString());
      }
    }
    return dayArray;
  };

  // create an array of all years
  const createYearArray = () => {
    var yearArray = [];
    for (var i = 1950; i <= 2023; i++) {
      yearArray.push(i.toString());
    }
    return yearArray;
  };

  const days = createDayArray();
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const years = createYearArray();

  // using state to keep track of what the selected day/month/year is
  const [day, setDay] = useState("TT");
  const [month, setMonth] = useState("MM");
  const [year, setYear] = useState("JJJJ");

  // the string we will send back to the StudyPartOne component
  var dateString = "";

  // update the state of day/month/year whenever a new option is selected from the dropdown
  // and create the string representing the current date
  const handleDayChange = (e) => {
    setDay(e.target.value);
    dateString = e.target.value + "." + month + "." + year;
    props.onInputDate(dateString);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    dateString = day + "." + e.target.value + "." + year;
    props.onInputDate(dateString);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
    dateString = day + "." + month + "." + e.target.value;
    props.onInputDate(dateString);
  };

  // needed to show a consistent input field for the date picker across all devices and browsers
  const calendarRef = useRef(null);
  const [calendarValueState, setCalendarValueState] = useState("TT.MM.JJJJ");

  // change the format of the date from YYYY-MM-DD to DD-MM-YYYY
  const handleCalendarInput = (e) => {
    const stringArray = e.target.value.split("-");
    const formattedDate = stringArray.reverse().join(".");
    setCalendarValueState(formattedDate);
    props.onInputDate(formattedDate);
  };

  if (props.inputMethod == "calendar") {
    return (
      <div className="container">
        <h4>Datum: {props.date}</h4>
        <div className="row mt-2 align-items-center g-2">
          <div className="col-auto">
            <input
              ref={calendarRef}
              type="date"
              name="calendar"
              id="calendar"
              min="1950-01-01"
              max="2023-12-31"
              style={{ visibility: "hidden", position: "absolute" }}
              onChange={handleCalendarInput}
            />
            <div className="input-group">
              <input
                type="text"
                id="calendarText"
                className="form-control shadow-none"
                placeholder="TT.MM.JJJJ"
                value={calendarValueState}
                readOnly
                onClick={() => calendarRef.current.showPicker()}
              />
              <span className="input-group-text">
                <span
                  className="bi bi-calendar-date"
                  onClick={() => calendarRef.current.showPicker()}
                ></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.inputMethod == "oneTextbox") {
    return (
      <div className="container">
        <h4>Datum: {props.date}</h4>
        <div className="row mt-2 align-items-center g-2">
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              placeholder="TT.MM.JJJJ"
              onChange={(e) => {
                props.onInputDate(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    );
  } else if (props.inputMethod == "splitTextbox") {
    return (
      <div className="container">
        <h4>Datum: {props.date}</h4>
        <div className="row mt-2 align-items-center g-2">
          <div className="col-lg-1 col-3">
            <input
              type="text"
              className="form-control"
              placeholder="TT"
              onChange={handleDayChange}
            />
          </div>
          <div className="col-lg-1 col-3">
            <input
              type="text"
              className="form-control"
              placeholder="MM"
              onChange={handleMonthChange}
            />
          </div>
          <div className="col-lg-2 col-6">
            <input
              type="text"
              className="form-control"
              placeholder="JJJJ"
              onChange={handleYearChange}
            />
          </div>
        </div>
      </div>
    );
  } else if (props.inputMethod == "dropdown") {
    return (
      <div className="container">
        <h4>Datum: {props.date}</h4>
        <div className="row mt-2 align-items-center g-2">
          <div className="col-4 col-md-auto">
            <select className="form-select" onChange={handleDayChange}>
              <option value="Tag" hidden>
                TT
              </option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
          <div className="col-4 col-md-auto">
            <select className="form-select" onChange={handleMonthChange}>
              <option value="Monat" hidden>
                MM
              </option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div className="col-4 col-md-auto">
            <select className="form-select" onChange={handleYearChange}>
              <option value="Jahr" hidden>
                JJJJ
              </option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/Error" />;
  }
}
