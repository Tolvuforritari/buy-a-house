import React, { Component } from "react";
import logo from "./logo.svg";
import "./main-page.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

const Root = () => {
  return <h2>Home Component</h2>;
};

const Search = () => {
  return <h2>Search Component</h2>;
};

const List = () => {
  return <h2>List Component</h2>;
};

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"></img>
            <h1 class="App-title">Welcome to React</h1>
          </header>
          <ul>
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              <Link to="/search">Search</Link>{" "}
            </li>
            <li>
              <Link to="/list">List</Link>{" "}
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Root}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/list" component={List}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routing;
