let btnType;
let randomDate;
let barpercentage;

function setTestValues() {
  var btnTypes = [
    "btn btn-primary",
    "btn btn-secondary",
    "btn btn-success",
    "btn btn-danger",
  ];
  btnType = btnTypes[Math.floor(Math.random() * btnTypes.length)];
  var dates = ["11.01.1011", "22.02.2022", "33.03.3033"];
  randomDate = dates[Math.floor(Math.random() * dates.length)];

  barpercentage = barpercentage + 10;
}

export default function Study() {
  setTestValues();
  // TODO: make barpercentage work -> carry variables through submit and reload of the page

  return (
    <div className="container">
      <div className="m-4">
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: { barpercentage } + "%" }}
          >
            {barpercentage}
          </div>
        </div>
      </div>
      <div className="p-5 my-4 bg-light rounded-3">
        <h1>Studie zur Eingabe von Geburtsdaten</h1>

        <form>
          <p>{randomDate}</p>
          <div className="row align-items-center g-3">
            <div className="col-auto">
              <input type="text" id="typeText" className="form-control" />
              <label className="form-label" htmlFor="typeText">
                Text input
              </label>
            </div>
            <div className="col-auto">
              <button type="submit" className={btnType}>
                Test
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
