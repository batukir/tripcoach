import "./home.css";

export default function Home() {
  return (
    <div
      class="home"
      style={{
        backgroundImage: `url("/images/trip.jpeg")`,
        backgroundPosition: "center",
      }}
      
    >
      <h1 class="header"> Trip Coach will find your next destination!</h1>
      <h5 class="header">
        Help us learn more about you and we will do the rest
      </h5>
      <div class="container">
        <form>
          <div class="row">
            <div class="col-lg-7 mx-auto">
            <div class="card shadow border-0 mb-5">
                <div class="card-body p-5">
                <h2 class="h4 mb-1">Please select continent preferences</h2>
                  <p class="small text-muted font-italic mb-4">
                    Which part of the world would you want to go?
                  </p>
                  <ul class="list-group">
                    <li class="list-group-item rounded-0">
                      <div class="custom-control custom-checkbox">
                        <input
                          class="custom-control-input"
                          id="europe"
                          type="checkbox"
                        />
                        <label
                          class="cursor-pointer font-italic d-block custom-control-label"
                          for="europe"
                        >
                          Europe
                        </label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input
                          class="custom-control-input"
                          id="Asia"
                          type="checkbox"
                        />
                        <label
                          class="cursor-pointer font-italic d-block custom-control-label"
                          for="Asia"
                        >
                          Asia
                        </label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input
                          class="custom-control-input"
                          id="north-america"
                          type="checkbox"
                        />
                        <label
                          class="cursor-pointer font-italic d-block custom-control-label"
                          for="north-america"
                        >
                          North America
                        </label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input
                          class="custom-control-input"
                          id="south-america"
                          type="checkbox"
                        />
                        <label
                          class="cursor-pointer font-italic d-block custom-control-label"
                          for="south-america"
                        >
                          South America
                        </label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input
                          class="custom-control-input"
                          id="africa"
                          type="checkbox"
                        />
                        <label
                          class="cursor-pointer font-italic d-block custom-control-label"
                          for="africa"
                        >
                          Africa
                        </label>
                      </div>
                    </li>
                    <li class="list-group-item rounded-0">
                      <div class="custom-control custom-checkbox">
                        <input
                          class="custom-control-input"
                          id="oceania"
                          type="checkbox"
                        />
                        <label
                          class="cursor-pointer font-italic d-block custom-control-label"
                          for="oceania"
                        >
                          Oceania
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="card shadow border-0 mb-5">
                <div class="card-body p-5">
                  <h2 class="h4 mb-1">
                    Please select your activity preferences
                  </h2>
                  <p class="small text-muted font-italic mb-4">
                    What kind of activities are you interested in?
                  </p>
                  <ul class="list-group">
                    <li class="list-group-item rounded-0">
                      <div class="custom-control custom-checkbox">
                        <input
                          class="custom-control-input"
                          id="sightseeing"
                          type="checkbox"
                        />
                        <label
                          class="cursor-pointer font-italic d-block custom-control-label"
                          for="sightseeing"
                        >
                          Sightseeing
                        </label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input
                          class="custom-control-input"
                          id="beaches"
                          type="checkbox"
                        />
                        <label
                          class="cursor-pointer font-italic d-block custom-control-label"
                          for="beaches"
                        >
                          Beaches
                        </label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input
                          class="custom-control-input"
                          id="romantic"
                          type="checkbox"
                        />
                        <label
                          class="cursor-pointer font-italic d-block custom-control-label"
                          for="romantic"
                        >
                          Romantic
                        </label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input
                          class="custom-control-input"
                          id="camping"
                          type="checkbox"
                        />
                        <label
                          class="cursor-pointer font-italic d-block custom-control-label"
                          for="camping"
                        >
                          Camping
                        </label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input
                          class="custom-control-input"
                          id="hiking"
                          type="checkbox"
                        />
                        <label
                          class="cursor-pointer font-italic d-block custom-control-label"
                          for="hiking"
                        >
                          Hiking
                        </label>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="custom-control custom-checkbox">
                        <input
                          class="custom-control-input"
                          id="skiing"
                          type="checkbox"
                        />
                        <label
                          class="cursor-pointer font-italic d-block custom-control-label"
                          for="skiing"
                        >
                          Skiing
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="card shadow border-0 mb-5">
                <div class="card-body p-5">
                  <h2 class="h4 mb-1">How many people are you?</h2>
                  <p class="small text-muted font-italic mb-4">
                    Please tell me you have someone to go with
                  </p>
                  <ul class="list-group">
                    <li class="list-group-item rounded-0 d-flex align-items-center justify-content-between">
                      <div class="custom-control custom-radio">
                        <input
                          class="custom-control-input"
                          id="alone"
                          type="radio"
                          name="amount"
                        />
                        <label class="custom-control-label" for="alone">
                          <span class="small font-italic text-muted">
                            Just me
                          </span>
                        </label>
                      </div>
                      <label for="alone">
                        <img src="" alt="" width="60" />
                      </label>
                    </li>
                    <li class="list-group-item d-flex align-items-center justify-content-between">
                      <div class="custom-control custom-radio">
                        <input
                          class="custom-control-input"
                          id="couple"
                          type="radio"
                          name="amount"
                        />
                        <label class="custom-control-label" for="couple">
                          <span class="small font-italic text-muted">
                            A couple
                          </span>
                        </label>
                      </div>
                      <label for="couple">
                        <img src="" alt="" width="60" />
                      </label>
                    </li>
                    <li class="list-group-item d-flex align-items-center justify-content-between">
                      <div class="custom-control custom-radio">
                        <input
                          class="custom-control-input"
                          id="group"
                          type="radio"
                          name="amount"
                        />
                        <label class="custom-control-label" for="group">
                          <span class="small font-italic text-muted">
                            Group of friends
                          </span>
                        </label>
                      </div>
                      <label for="group">
                        <img src="" alt="" width="60" />
                      </label>
                    </li>
                    <li class="list-group-item d-flex align-items-center justify-content-between">
                      <div class="custom-control custom-radio">
                        <input
                          class="custom-control-input"
                          id="family"
                          type="radio"
                          name="amount"
                        />
                        <label class="custom-control-label" for="family">
                          <span class="small font-italic text-muted">
                            Family
                          </span>
                        </label>
                      </div>
                      <label for="family">
                        <img src="" alt="" width="60" />
                      </label>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="card shadow border-0 mb-5">
                <div class="card-body p-5">
                  <h2 class="h4 mb-1">How about your budget?</h2>
                  <p class="small text-muted font-italic mb-4">
                    How much are you willing to spend?
                  </p>
                  <ul class="list-group">
                    <li class="list-group-item rounded-0 d-flex align-items-center justify-content-between">
                      <div class="custom-control custom-radio">
                        <input
                          class="custom-control-input"
                          id="low"
                          type="radio"
                          name="budget"
                        />
                        <label class="custom-control-label" for="low">
                          <span class="small font-italic text-muted">
                            On a budget
                          </span>
                        </label>
                      </div>
                      <label for="low">
                        <img src="" alt="" width="60" />
                      </label>
                    </li>
                    <li class="list-group-item d-flex align-items-center justify-content-between">
                      <div class="custom-control custom-radio">
                        <input
                          class="custom-control-input"
                          id="medium"
                          type="radio"
                          name="budget"
                        />
                        <label class="custom-control-label" for="medium">
                          <span class="small font-italic text-muted">
                            Pretty resonable
                          </span>
                        </label>
                      </div>
                      <label for="medium">
                        <img src="" alt="" width="60" />
                      </label>
                    </li>
                    <li class="list-group-item d-flex align-items-center justify-content-between">
                      <div class="custom-control custom-radio">
                        <input
                          class="custom-control-input"
                          id="high"
                          type="radio"
                          name="budget"
                        />
                        <label class="custom-control-label" for="high">
                          <span class="small font-italic text-muted">
                            Treating myself
                          </span>
                        </label>
                      </div>
                      <label for="high">
                        <img src="" alt="" width="60" />
                      </label>
                    </li>
                    <li class="list-group-item d-flex align-items-center justify-content-between">
                      <div class="custom-control custom-radio">
                        <input
                          class="custom-control-input"
                          id="none"
                          type="radio"
                          name="budget"
                        />
                        <label class="custom-control-label" for="none">
                          <span class="small font-italic text-muted">
                            Not sure
                          </span>
                        </label>
                      </div>
                      <label for="none">
                        <img src="" alt="" width="60" />
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <input type="submit" class="btn btn-primary"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
