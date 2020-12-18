import React, { Component } from "react";
import ReviewDataService from "../services/review.service";

export default class AddReview extends Component {
  constructor(props) {
    super(props);
    this.onChangebusNumber = this.onChangebusNumber.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveReview = this.saveReview.bind(this);
    this.newReview = this.newReview.bind(this);

    this.state = {
      id: null,
      busNumber: "",
      description: "", 
      published: false,

      submitted: false
    };
  }

  onChangebusNumber(e) {
    this.setState({
      busNumber: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  saveReview() {
    var data = {
      busNumber: this.state.busNumber,
      description: this.state.description
    };

    ReviewDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          busNumber: response.data.busNumber,
          description: response.data.description,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newReview() {
    this.setState({
      id: null,
      busNumber: "",
      description: "",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newReview}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="busNumber">Bus Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="busNumber"
                  required
                  value={this.state.busNumber}
                  onChange={this.onChangebusNumber}
                  name="busNumber"
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  name="description"
                />
              </div>
  
              <button onClick={this.saveReview} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
  }
}