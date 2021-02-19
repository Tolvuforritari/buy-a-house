import React, { Component } from "react";

class Inquiry extends Component {
  state = {
    name: "",
    email: "",
    remarks: "",
  };

  onNameChange = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };

  onEmailChange = (e) => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  };

  onRemarksChange = (e) => {
    e.preventDefault();
    this.setState({ remarks: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const house = this.props.house;
    const contactInfo = this.state;
  };

  render() {
    return (
      <form className="mt-2">
        <div className="form-group">
          <label htmlFor="name">Namn</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Namn"
            value={this.state.name}
            onChange={this.onNameChange}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="email">E-postadress</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="E-postadress"
            value={this.state.email}
            onChange={this.onEmailChange}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="remarks">Kommentar</label>
          <input
            type="text"
            id="remarks"
            className="form-control"
            placeholder="Kommentar"
            value={this.state.remarks}
            onChange={this.onRemarksChange}
          ></input>
        </div>
        <button
          className="btn btn-primary"
          disabled={
            this.state.name.length === 0 || this.state.email.length === 0
          }
          onclick={this.onSubmit}
        >
          Skicka
        </button>
      </form>
    );
  }
}

export default Inquiry;
