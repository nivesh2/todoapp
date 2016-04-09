import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {

  render() {
    const { location } = this.props;

    return (
        <div class="navbar">
          <div class="container">
            <ul class="navbar-list">
              <li class="navbar-item">
                <IndexLink class="navbar-link" to="/">Featured</IndexLink>
              </li>
              <li class="navbar-item">
                <Link class="navbar-link" to="archives/Hello?date=123&&filter=name">Archives</Link>
              </li>
              <li class="navbar-item">
                <Link class="navbar-link" to="settings">Settings</Link>
              </li>
            </ul>
          </div>
        </div>
    );
  }
}
