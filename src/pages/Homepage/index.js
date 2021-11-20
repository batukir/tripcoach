import "./home.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
export default function Home() {
  const continents = [
    { value: "Europe", isChecked: false },
    { value: "Asia", isChecked: false },
    { value: "North America", isChecked: false },
    { value: "South America", isChecked: false },
    { value: "Africa", isChecked: false },
    { value: "Oceania", isChecked: false },
  ];

  const people = [
    { value: "Just me" },
    { value: "A couple" },
    { value: "Group of friends" },
    { value: "Family" },
  ];

  const budget = [
    { value: "On a budget" },
    { value: "Treating myself" },
    { value: "Not sure" },
  ];

  const [checkboxContinents, setCheckboxContinents] = useState(continents);
  const [selectedPeople] = useState(people);
  const [selectedBudget] = useState(budget);
  const [peopleValue, setPeopleValue] = useState({
    value: "",
  });
  const [budgetValue, setBudgetValue] = useState({
    value: "",
  });
  const [errorMessage, setErrorMessage] = React.useState("");

  const history = useHistory();
  const [submitError, setError] = React.useState(false);
  const selectedContinents = checkboxContinents.filter(
    ({ isChecked }) => isChecked
  );

  function onTestClick(e) {
    if (
      selectedContinents.length > 0 &&
      peopleValue.value !== "" &&
      budgetValue.value !== ""
    ) {
      history.push({
        pathname: "/mapview",
        state: {
          checkboxContinents,
          peopleValue,
          budgetValue,
        },
      });
    } else {
      e.preventDefault();
      setErrorMessage("Error! Please fill all checkboxes");
      setError(true);
    }
  }
  return (
    <div className="home">
      <div className="hero-container">
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1>TRIP COACH</h1>
        <p>Help us learn more about you and we will do the rest</p>
      </div>
      <div className="container">
        <form>
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="card shadow border-0 mb-4">
                <div className="card-body p-5">
                  <h2 className="h4 mb-1">
                    Please select continent preferences
                  </h2>
                  <p className="small text-muted font-italic mb-4">
                    Which part of the world would you want to go?
                  </p>
                  <ul className="list-group">
                    {checkboxContinents.map((checkbox, index) => (
                      <li
                        className="list-group-item rounded-0"
                        key={checkbox.value}
                      >
                        <div className="custom-control custom-checkbox">
                          <input
                            className="custom-control-input"
                            id={checkbox.value}
                            type="checkbox"
                            onChange={(e) => {
                              const newCheckboxes = [...checkboxContinents];
                              newCheckboxes[index].isChecked = e.target.checked;
                              setCheckboxContinents(newCheckboxes);
                            }}
                          />
                          <label
                            className="cursor-pointer font-italic d-block custom-control-label"
                            htmlFor={checkbox.value}
                          >
                            {checkbox.value}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card shadow border-0 mb-4">
                <div className="card-body p-5">
                  <h2 className="h4 mb-1">How many people are you?</h2>
                  <p className="small text-muted font-italic mb-4">
                    Please tell me you have someone to go with
                  </p>
                  <ul className="list-group">
                    {selectedPeople.map((selected, index) => (
                      <li
                        className="list-group-item rounded-0 d-flex align-items-center justify-content-between"
                        key={selected.value}
                      >
                        <div className="custom-control custom-radio">
                          <input
                            className="custom-control-input"
                            id={selected.value}
                            type="radio"
                            name="amount"
                            onChange={(e) => {
                              setPeopleValue({
                                value: e.target.id,
                              });
                            }}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor={selected.value}
                          >
                            <span className="small font-italic text-muted">
                              {selected.value}
                            </span>
                          </label>
                        </div>
                        <label htmlFor={selected.value}>
                          <img src="" alt="" width="60" />
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="card shadow border-0 mb-5">
                <div className="card-body p-5">
                  <h2 className="h4 mb-1">How about your budget?</h2>
                  <p className="small text-muted font-italic mb-4">
                    How much are you willing to spend?
                  </p>
                  <ul className="list-group">
                    {selectedBudget.map((selected, index) => (
                      <li
                        className="list-group-item rounded-0 d-flex align-items-center justify-content-between"
                        key={selected.value}
                      >
                        <div className="custom-control custom-radio">
                          <input
                            className="custom-control-input"
                            id={selected.value}
                            type="radio"
                            name="budget"
                            onChange={(e) => {
                              setBudgetValue({
                                value: e.target.id,
                              });
                            }}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor={selected.value}
                          >
                            <span className="small font-italic text-muted">
                              {selected.value}
                            </span>
                          </label>
                        </div>
                        <label htmlFor={selected.value}>
                          <img src="" alt="" width="60" />
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {submitError ? (
                errorMessage && (
                  <button
                    onClick={onTestClick}
                    style={{
                      marginTop: "-25px",
                      width: "100%",
                    }}
                    className="btn btn-danger"
                  >
                    {errorMessage}
                  </button>
                )
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onTestClick}
                  style={{
                    marginTop: "-25px",
                  }}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
