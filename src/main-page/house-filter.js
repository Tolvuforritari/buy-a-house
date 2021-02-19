import React, { Component } from "react";

class HouseFilter extends Component {
  state = {};

  onSearchChange = (e) => {
    const country = e.target.value;
    this.props.filterHouses(country);
  };

  render() {
    const search = this.state.search;
    const countries = this.props.countries || [];

    return (
      <div className="form-group row mt3">
        <div className="offset-md-2 col-md-4">
          <span id="search-text" >Sök i Schweiz eller Nederländerna:</span>
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            value={search}
            onChange={this.onSearchChange}
          >
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default HouseFilter;
