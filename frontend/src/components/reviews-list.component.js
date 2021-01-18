import React, { Component } from "react";
import ReviewDataService from "../services/review.service";
import { Link } from "react-router-dom";

import UserService from "../services/user.service";

export default class ReviewsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchCriterias = this.onChangeSearchCriterias.bind(this);
    this.retrieveReviews = this.retrieveReviews.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveReview = this.setActiveReview.bind(this);
    this.removeAllReviews = this.removeAllReviews.bind(this);
    this.searchcriterias = this.searchcriterias.bind(this);

    this.state = {
      reviews: [],
      currentReview: null,
      currentIndex: -1,
      searchcriterias: "",
      content: ""
    };
  }

  componentDidMount() {
    this.retrieveReviews();
    
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  onChangeSearchCriterias(e) {
    const searchcriterias = e.target.value;

    this.setState({
      searchcriterias: searchcriterias
    });
  }

  retrieveReviews() {
    ReviewDataService.getAll()
      .then(response => {
        this.setState({
          reviews: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveReviews();
    this.setState({
      currentReview: null,
      currentIndex: -1
    });
  }

  setActiveReview(review, index) {
    this.setState({
      currentReview: review,
      currentIndex: index
    });
  }

  removeAllReviews() {
    ReviewDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchcriterias() {
    ReviewDataService.findBybusNumber(this.state.searchcriterias)
      .then(response => {
        this.setState({
          reviews: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchcriterias, reviews, currentReview, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Params"
              value={searchcriterias}
              onChange={this.onChangeSearchCriterias}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchcriterias}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Reviews List</h4>

          <ul className="list-group">
            {reviews &&
              reviews.map((review, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveReview(review, index)}
                  key={index}
                >
                  {review.transport}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllReviews}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentReview ? (
            <div>
              <h4>Review</h4>
              <div>
                <label>
                  <strong>Transport:</strong>
                </label>{" "}
                {currentReview.transport}
              </div>
              <div>
                <label>
                  <strong>Notes:</strong>
                </label>{" "}
                {currentReview.notes}
              </div>
              <div>
                <label>
                  <strong>Leaving Point:</strong>
                </label>{" "}
                {currentReview.leavingPoint}
              </div>
              <div>
                <label>
                  <strong>Arriving Point:</strong>
                </label>{" "}
                {currentReview.arrivingPoint}
              </div>
              <div>
                <label>
                  <strong>Leaving Hour:</strong>
                </label>{" "}
                {currentReview.leavingHour}
              </div>
              <div>
                <label>
                  <strong>Length: </strong>
                </label>{" "}
                {currentReview.length}
              </div>
              <div>
                <label>
                  <strong>Level of Crowd:</strong>
                </label>{" "}
                {currentReview.levelOfCrowd}
              </div>
              <div>
                <label>
                  <strong>Notes:</strong>
                </label>{" "}
                {currentReview.notes}
              </div>
              <div>
                <label>
                  <strong>Satisfaction:</strong>
                </label>{" "}
                {currentReview.satisfaction}
              </div>

              <Link
                to={"/reviews/" + currentReview.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Review...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}