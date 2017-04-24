import React, { Component } from "react";
import { gql, graphql } from "react-apollo";
import Schedule from "./Schedule";
import "./App.css";

const Query = gql`
  query conferenceSchedule {
    events(slug: "reacteurope-2017") {
      schedule {
        title
        startDate
        type
        length
        speakers {
          name
          avatarUrl
        }
      }
    }
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.data.events &&
          <Schedule schedule={this.props.data.events[0].schedule} />}
      </div>
    );
  }
}

export default graphql(Query)(App);
