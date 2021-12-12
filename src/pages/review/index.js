import React, { useState, useEffect } from "react";
import Axios from "axios";
export default function Review() {
  const [username, setUsername] = useState("");
  const [review, setReview] = useState("");
  const [reviewList, setReviewList] = useState([]);
  const [newReview, setNewReview] = useState("");

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      username: username,
      review: review,
    });
    setReviewList([
      ...reviewList, 
      { username: username, review: review },
    ]);
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setReviewList(response.data);
    });
  });

  const deleteReview = (username) => {
    Axios.delete(`http://localhost:3001/api/delete/${username}`);
  };

  const updateReview = (username) => {
    Axios.put("http://localhost:3001/api/update", {
      username: username,
      review: newReview,
    });
    setNewReview("");
  };
  return (
    <div>
      <div className="cardcontainer">
        <h1 className="review-header"> Leave your review here: </h1>
        <label className="label-header">Username:</label>
        <input
          type="text"
          className="input-size-user"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <label className="label-header">Review:</label>
        <input
          type="text"
          className="input-size-review"
          onChange={(e) => {
            setReview(e.target.value);
          }}
        />

        <button className="submit-review" onClick={submitReview}>
          Submit
        </button>
        <div className="review-section">
          <h3 className="label-header"> Previous reviews: </h3>
          {reviewList.map((val) => {
            return (
              <div className="review-card">
                <h1 className="review-font"> {val.username} </h1>
                <p className="review-font"> Review: {val.review} </p>

                <button
                  className="crud-button"
                  onClick={() => {
                    deleteReview(val.username);
                  }}
                >
                  {" "}
                  Delete{" "}
                </button>
                <input
                  id="updateInput"
                  type="text"
                  onChange={(e) => {
                    setNewReview(e.target.value);
                  }}
                />
                <button
                  className="crud-button"
                  onClick={() => {
                    updateReview(val.username);
                  }}
                >
                  Update
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
