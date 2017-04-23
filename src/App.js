import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import './App.css';

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
        {console.log(this.props.data)}
        fdsfds
      </div>
    );
  }
}

export default graphql(Query)(App);
