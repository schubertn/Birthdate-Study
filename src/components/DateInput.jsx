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
    // TODO: use correct start date and current date using Date()
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

  // the string we will send back to the Study component
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

  if (props.inputMethod == "calender") {
    return (
      <div className="col-auto">
        <p>Datum: {props.date}</p>
        <input
          type="text"
          placeholder="Calender Input"
          onChange={(e) => {
            props.onInputDate(e.target.value);
          }}
        />
      </div>
    );
  } else if (props.inputMethod == "textbox") {
    return (
      <div className="col-auto">
        <p>Datum: {props.date}</p>
        <input
          type="text"
          placeholder="Textbox Input"
          onChange={(e) => {
            props.onInputDate(e.target.value);
          }}
        />
      </div>
    );
  } else if (props.inputMethod == "dropdown") {
    return (
      <div className="col-auto">
        <p>Datum: {props.date}</p>
        <select onChange={handleDayChange}>
          <option value="Tag">Tag</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select onChange={handleMonthChange}>
          <option value="Monat">Monat</option>
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>
        <select onChange={handleYearChange}>
          <option value="Jahr">Jahr</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    );
  } else {
    return (
      <div className="col-auto">
        <p>Datum: {props.date}</p>
        <input
          type="text"
          placeholder="Problem"
          onChange={(e) => {
            props.onInputDate(e.target.value);
          }}
        />
      </div>
    );
  }
}