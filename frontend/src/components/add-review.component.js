import React, { Component } from "react";
import ReviewDataService from "../services/review.service";

export default class AddReview extends Component {
  constructor(props) {
    super(props);
    this.onChangeleavingPoint = this.onChangeleavingPoint.bind(this);
    this.onChangearrivingPoint = this.onChangearrivingPoint.bind(this);
    this.onChangetransport = this.onChangetransport.bind(this);
    this.onChangeleavingHour = this.onChangeleavingHour.bind(this);
    this.onChangelength = this.onChangelength.bind(this);
    this.onChangelevelOfCrowd = this.onChangelevelOfCrowd.bind(this);
    this.onChangeNotes = this.onChangeNotes.bind(this);
    this.onChangeSatisfaction = this.onChangeSatisfaction.bind(this);
    this.saveReview = this.saveReview.bind(this);
    this.newReview = this.newReview.bind(this);

    this.state = {
      id: null,
      leavingPoint: "",
      arrivingPoint: "",
      transport: "",
      leavingHour: "",
      length: null,
      levelOfCrowd: null,
      notes: "",
      satisfaction: null,

      submitted: false
    };
  }

  onChangeleavingPoint(e) {
    this.setState({
      leavingPoint: e.target.value
    });
  }

  onChangearrivingPoint(e) {
    this.setState({
      arrivingPoint: e.target.value
    });
  }

  onChangetransport(e) {
    this.setState({
      transport: e.target.value
    });
  }

  onChangeleavingHour(e) {
    this.setState({
      leavingHour: e.target.value
    });
  }

  onChangelength(e) {
    this.setState({
      length: e.target.value
    });
  }

  onChangelevelOfCrowd(e) {
    this.setState({
      levelOfCrowd: e.target.value
    });
  }

  onChangeNotes(e) {
    this.setState({
      notes: e.target.value
    });
  }

  onChangeSatisfaction(e) {
    this.setState({
      satisfaction: e.target.value
    });
  }

  saveReview() {
    var data = {
      leavingPoint: this.state.leavingPoint,
      arrivingPoint: this.state.arrivingPoint,
      transport: this.state.transport,
      leavingHour: this.state.leavingHour,
      length: this.state.length,
      levelOfCrowd: this.state.levelOfCrowd,
      notes: this.state.notes,
      satisfaction: this.state.satisfaction
    };

    ReviewDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          leavingPoint: response.data.leavingPoint,
          arrivingPoint: response.data.arrivingPoint,
          transport: response.data.transport,
          leavingHour: response.data.leavingHour,
          length: response.data.length,
          levelOfCrowd: response.data.levelOfCrowd,
          notes: response.data.notes,
          satisfaction: response.data.satisfaction,

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
      leavingPoint: "",
      arrivingPoint: "",
      transport: "",
      leavingHour: "",
      length: null,
      levelOfCrowd: null,
      notes: "",
      satisfaction: null,

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
                <label htmlFor="transport">Transport</label>
                <input
                  type="text"
                  className="form-control"
                  id="transport"
                  required
                  value={this.state.transport}
                  onChange={this.onChangetransport}
                  name="transport"
                />
              </div>

              <div className="form-group">
                <label htmlFor="leavingPoint">Leaving Point</label>
                <input
                  type="text"
                  className="form-control"
                  id="leavingPoint"
                  required
                  value={this.state.leavingPoint}
                  onChange={this.onChangeleavingPoint}
                  name="leavingPoint"
                />
              </div>

              <div className="form-group">
                <label htmlFor="arrivingPoint">Arriving Point</label>
                <input
                  type="text"
                  className="form-control"
                  id="arrivingPoint"
                  required
                  value={this.state.arrivingPoint}
                  onChange={this.onChangearrivingPoint}
                  name="arrivingPoint"
                />
              </div>

              <div className="form-group">
                <label htmlFor="leavingHour">Leaving Hour</label>
                <input
                  type="text"
                  className="form-control"
                  id="leavingHour"
                  required
                  value={this.state.leavingHour}
                  onChange={this.onChangeleavingHour}
                  name="leavingHour"
                />
              </div>

              <div className="form-group">
                <label htmlFor="length">Length</label>
                <input
                  type="text"
                  className="form-control"
                  id="length"
                  required
                  value={this.state.length}
                  onChange={this.onChangelength}
                  name="length"
                />
              </div>

              <div className="form-group">
                <label htmlFor="levelOfCrowd">Level Of Crowd</label>
                <input
                  type="text"
                  className="form-control"
                  id="levelOfCrowd"
                  required
                  value={this.state.levelOfCrowd}
                  onChange={this.onChangelevelOfCrowd}
                  name="levelOfCrowd"
                />
              </div>

              <div className="form-group">
                <label htmlFor="notes">Notes</label>
                <input
                  type="text"
                  className="form-control"
                  id="notes"
                  required
                  value={this.state.notes}
                  onChange={this.onChangeNotes}
                  name="notes"
                />
              </div>

              <div className="form-group">
                <label htmlFor="satisfaction">Satisfaction</label>
                <input
                  type="text"
                  className="form-control"
                  id="satisfaction"
                  required
                  value={this.state.satisfaction}
                  onChange={this.onChangeSatisfaction}
                  name="satisfaction"
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