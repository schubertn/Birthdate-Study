export default function End() {
  return (
    <div className="container">
      <div className="m-4">
        <div className="progress">
          <div className="progress-bar" style={{ width: "100%" }}>
            100%
          </div>
        </div>
      </div>

      <div className="p-5 my-4 bg-light rounded-3">
        <h1>Studie zur Eingabe von Geburtsdaten</h1>
        <p>Studie beendet! Danke!</p>
      </div>
    </div>
  );
}
