import React, { Component } from "react";
import ReviewDataService from "../services/review.service";

export default class Review extends Component {
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
    this.getReview = this.getReview.bind(this);
    this.updateReview = this.updateReview.bind(this);
    this.deleteReview = this.deleteReview.bind(this);

    this.state = {
      currentReview: {
        id: null,
        leavingPoint: "",
        arrivingPoint: "",
        transport: "",
        leavingHour: "",
        length: null,
        levelOfCrowd: null,
        notes: "",
        satisfaction: null
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getReview(this.props.match.params.id);
  }

  onChangeleavingPoint(e){
    const leavingPoint = e.target.value;

    this.setState(prevState => ({
      currentReview: {
        ...prevState.currentReview,
        leavingPoint: leavingPoint
      }
    }));
  }

  onChangearrivingPoint(e){
    const arrivingPoint = e.target.value;

    this.setState(prevState => ({
      currentReview: {
        ...prevState.currentReview,
        arrivingPoint: arrivingPoint
      }
    }));
  }

  onChangetransport(e) {
    const transport = e.target.value;

    this.setState(function(prevState) {
      return {
        currentReview: {
          ...prevState.currentReview,
          transport: transport
        }
      };
    });
  }

  onChangeleavingHour(e) {
    const leavingHour = e.target.value;
    
    this.setState(prevState => ({
      currentReview: {
        ...prevState.currentReview,
        leavingHour: leavingHour
      }
    }));
  }

  onChangelength(e) {
    const length = e.target.value;
    
    this.setState(prevState => ({
      currentReview: {
        ...prevState.currentReview,
        length: length
      }
    }));
  }

  onChangelevelOfCrowd(e) {
    const levelOfCrowd = e.target.value;
    
    this.setState(prevState => ({
      currentReview: {
        ...prevState.currentReview,
        levelOfCrowd: levelOfCrowd
      }
    }));
  }

  onChangeNotes(e) {
    const notes = e.target.value;
    
    this.setState(prevState => ({
      currentReview: {
        ...prevState.currentReview,
        notes: notes
      }
    }));
  }

  onChangeSatisfaction(e) {
    const satisfaction = e.target.value;
    
    this.setState(prevState => ({
      currentReview: {
        ...prevState.currentReview,
        satisfaction: satisfaction
      }
    }));
  }

  getReview(id) {
    ReviewDataService.get(id)
      .then(response => {
        this.setState({
          currentReview: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateReview() {
    ReviewDataService.update(
      this.state.currentReview.id,
      this.state.currentReview
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The review was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteReview() {    
    ReviewDataService.delete(this.state.currentReview.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/reviews')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentReview } = this.state;

    return (
      <div>
        {currentReview ? (
          <div className="edit-form">
            <h4>Review</h4>
            <form>
              <div className="form-group">
                <label htmlFor="transport">Transport</label>
                <input
                  type="text"
                  className="form-control"
                  id="transport"
                  value={currentReview.transport}
                  onChange={this.onChangetransport}
                />
              </div>
              <div className="form-group">
                <label htmlFor="leavingPoint">Leaving Point</label>
                <input
                  type="text"
                  className="form-control"
                  id="transport"
                  value={currentReview.leavingPoint}
                  onChange={this.onChangeleavingPoint}
                />
              </div>
              <div className="form-group">
                <label htmlFor="arrivingPoint">Arriving Point</label>
                <input
                  type="text"
                  className="form-control"
                  id="transport"
                  value={currentReview.arrivingPoint}
                  onChange={this.onChangearrivingPoint}
                />
              </div>
              <div className="form-group">
                <label htmlFor="leavingHour">Leaving Hour</label>
                <input
                  type="text"
                  className="form-control"
                  id="notes"
                  value={currentReview.leavingHour}
                  onChange={this.onChangeleavingHour}
                />
              </div>
              <div className="form-group">
                <label htmlFor="length">length</label>
                <input
                  type="text"
                  className="form-control"
                  id="notes"
                  value={currentReview.length}
                  onChange={this.onChangelength}
                />
              </div>
              <div className="form-group">
                <label htmlFor="levelOfCrowd">levelOfCrowd</label>
                <input
                  type="text"
                  className="form-control"
                  id="notes"
                  value={currentReview.levelOfCrowd}
                  onChange={this.onChangelevelOfCrowd}
                />
              </div>
              <div className="form-group">
                <label htmlFor="notes">Notes</label>
                <input
                  type="text"
                  className="form-control"
                  id="notes"
                  value={currentReview.notes}
                  onChange={this.onChangeNotes}
                />
              </div>
              <div className="form-group">
                <label htmlFor="satisfaction">Satisfaction</label>
                <input
                  type="text"
                  className="form-control"
                  id="notes"
                  value={currentReview.satisfaction}
                  onChange={this.onChangeSatisfaction}
                />
              </div>
            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteReview}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateReview}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Review...</p>
          </div>
        )}
      </div>
    );
  }
}