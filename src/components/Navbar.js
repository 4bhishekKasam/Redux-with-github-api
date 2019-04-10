import React, { Component } from "react";
import { connect } from "react-redux";
import { searchUser } from "../actions/userAction";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };
    this.searchUser = this.searchUser.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  searchUser(e) {
    e.preventDefault();
    this.props.searchUser(this.state.userName);
    this.setState({ userName: "" });
  }

  onChange(e) {
    this.setState({ [e.target.id]: e.target.value }, () =>
      console.log(this.state.userName)
    );
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-md navbar-light bg-primary">
        <div className="container">
          <h4>Github Search</h4>
          <form className="form-inline my-1 my-lg-0" onSubmit={this.searchUser}>
            <div className="input-group add-on">
              <input
                type="search"
                className="form-control mr-sm-2 border-right-0 border"
                id="userName"
                placeholder="Search User..."
                aria-label="Search"
                onChange={this.onChange}
                value={this.state.userName}
              />
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.githubUsers.items,
    total_count: state.githubUsers.total_count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchUser: value => {
      dispatch(searchUser(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
