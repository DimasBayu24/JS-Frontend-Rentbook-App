import React from "react";

const BookContent = props => {
  const bookAvailable = props.data.availability;
  let availableStatus;
  if (bookAvailable === "true") {
    availableStatus = <h3>Available</h3>;
  } else {
    availableStatus = <h3 style={{ color: "red" }}>Unavailable</h3>;
  }
  return (
    <div>
      <section className="header-title-container">
        <div className="header-wrapper">
          <div className="genre-label">
            <div className="label-text">
              <p>{props.data.genre}</p>
            </div>
          </div>
          <div className="main-header">
            <ul>
              <li>
                <h1>{props.data.title}</h1>
              </li>
              <li>{availableStatus}</li>
            </ul>
          </div>
          <div className="date-header">
            <p>{props.data.daterelease}</p>
          </div>
        </div>
        <div className="content-wrapper">
          <main>
            <p>{props.data.description}</p>
          </main>
        </div>
      </section>
    </div>
  );
};

export default BookContent;
