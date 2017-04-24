import React, { Component } from "react";
import { gql, graphql } from "react-apollo";
import { compose, mapProps, branch, renderComponent } from "recompose";
import Schedule from "./Schedule";
import LoadingIndicator from "./LoadingIndicator";
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

const withLoadingIndicator = branch(
  props => props.data.loading,
  renderComponent(LoadingIndicator),
);

const withScheduleData = mapProps(({ data }) => ({
  schedule: data.events[0].schedule,
}));

const App = ({ schedule }) => (
  <div className="App">
    <Schedule schedule={schedule} />
  </div>
);

export default compose(graphql(Query), withLoadingIndicator, withScheduleData)(App);
