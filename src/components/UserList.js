import React, { Component } from "react";
import { connect } from "react-redux";

class UserList extends Component {
  render() {
    const { users, total_count } = this.props;
    return (
      <div className="container-fluid">
        {total_count && (
          <div className="card">
            <div className="row">
              <div className="col-sm-4">Total Users : {total_count}</div>
            </div>
          </div>
        )}
        {users &&
          users.map(user => (
            <div className="card" key={user.id}>
              <div className="row">
                <div className="col-sm-4">
                  <img
                    src={user.avatar_url}
                    className="rounded-circle"
                    alt={user.login}
                  />
                </div>
                <div className="col-sm-8">
                  <h4>{user.login}</h4>
                  <p>Github Score: {user.score}</p>
                  <p>Url : {user.html_url}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.githubUsers.items,
    total_count: state.githubUsers.total_count
  };
};

export default connect(
  mapStateToProps,
  null
)(UserList);
