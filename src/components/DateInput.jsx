import PropTypes from "prop-types";
import { useState } from "react";

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
    // TODO: use correct start date and current date using Date() [also for calendar input]
    for (var i = 1950; i < 2024; i++) {
      yearArray.push(i.toString());
    }
    return yearArray;
  };

  const days = createDayArray();
  const months = [
    { label: "Januar", value: "01" },
    { label: "Februar", value: "02" },
    { label: "März", value: "03" },
    { label: "April", value: "04" },
    { label: "Mai", value: "05" },
    { label: "Juni", value: "06" },
    { label: "Juli", value: "07" },
    { label: "August", value: "08" },
    { label: "September", value: "09" },
    { label: "Oktober", value: "10" },
    { label: "November", value: "11" },
    { label: "Dezember", value: "12" },
  ];
  const years = createYearArray();

  // using state to keep track of what the selected day/month/year is
  const [day, setDay] = useState("DD");
  const [month, setMonth] = useState("MM");
  const [year, setYear] = useState("YYYY");

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

  // change the format of the date from YYYY-MM-DD to DD-MM-YYYY
  const handleCalendarInput = (e) => {
    const stringArray = e.target.value.split("-");
    const formattedDate = stringArray.reverse().join(".");
    props.onInputDate(formattedDate);
  };

  if (props.inputMethod == "calendar") {
    return (
      <div className="container">
        <h4>Datum: {props.date}</h4>
        <div className="row mt-2 align-items-center g-3">
          <div className="col-auto">
            <input
              type="date"
              className="form-control"
              id="calendar"
              name="calendar"
              min="1950-01-01"
              max="2023-12-31"
              onChange={handleCalendarInput}
            ></input>
          </div>
        </div>
      </div>
    );
  } else if (props.inputMethod == "oneTextbox") {
    return (
      <div className="container">
        <h4>Datum: {props.date}</h4>
        <div className="row mt-2 align-items-center g-3">
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
        <div className="row mt-2 align-items-center g-3">
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
        <div className="row mt-2 align-items-center g-3">
          <div className="col-auto">
            <select className="form-select" onChange={handleDayChange}>
              <option value="Tag">Tag</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
          <div className="col-auto">
            <select className="form-select" onChange={handleMonthChange}>
              <option value="Monat">Monat</option>
              {months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
          </div>
          <div className="col-auto">
            <select className="form-select" onChange={handleYearChange}>
              <option value="Jahr">Jahr</option>
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
    // TODO: remove after testing
    return (
      <div className="container">
        <p>Problem</p>
      </div>
    );
  }
}
