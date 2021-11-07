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
  const preferences = [
    { value: "Sightseeing", isChecked: false },
    { value: "Beaches", isChecked: false },
    { value: "Romantic", isChecked: false },
    { value: "Camping", isChecked: false },
    { value: "Hiking", isChecked: false },
    { value: "Skiing", isChecked: false },
  ];

  const people = [
    { value: "Just me" },
    { value: "A couple" },
    { value: "Group of friends" },
    { value: "Family" },
  ];

  const budget = [
    { value: "On a budget" },
    { value: "Pretty resonable" },
    { value: "Treating myself" },
    { value: "Not sure" },
  ];

  const [checkboxContinents, setCheckboxContinents] = useState(continents);
  const [checkboxPreferences, setCheckboxPreferences] = useState(preferences);
  const [selectedPeople] = useState(people);
  const [selectedBudget] = useState(budget);
  const [peopleValue, setPeopleValue] = useState({
    value: "",
  });
  const [budgetValue, setBudgetValue] = useState({
    value: "",
  });

  const history = useHistory();

  return (
    <div
      className="home"
      style={{
        backgroundImage: `url("/images/trip.jpeg")`,
        backgroundPosition: "center",
      }}
    >
      <h1 className="header"> Trip Coach will find your next destination!</h1>
      <h5 className="header">
        Help us learn more about you and we will do the rest
      </h5>

      <div className="container">
        <form>
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="card shadow border-0 mb-5">
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

              <div className="card shadow border-0 mb-5">
                <div className="card-body p-5">
                  <h2 className="h4 mb-1">
                    Please select your activity preferences
                  </h2>
                  <p className="small text-muted font-italic mb-4">
                    What kind of activities are you interested in?
                  </p>
                  <ul className="list-group">
                    {checkboxPreferences.map((checkbox, index) => (
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
                              const newCheckboxes = [...checkboxPreferences];
                              newCheckboxes[index].isChecked = e.target.checked;
                              setCheckboxPreferences(newCheckboxes);
                            }}
                            checked={checkbox.isChecked}
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

              <div className="card shadow border-0 mb-5">
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
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => history.push("/mapview")}
              >
                {console.log(checkboxContinents)}
                {console.log(checkboxPreferences)}
                {console.log(peopleValue)}
                {console.log(budgetValue)}
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
