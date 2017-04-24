import React from "react";
import { gql, graphql } from "react-apollo";
import { compose, mapProps, branch, renderComponent } from "recompose";
import parse from "date-fns/parse";
import addHours from "date-fns/add_hours";
import compareAsc from 'date-fns/compare_asc';
import getDate from 'date-fns/get_date';
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

function createSchedule(schedule) {
  let result = {
    16: [],
    17: [],
    18: [],
    19: [],
    20: [],
  };
  for (let i = 0; i < schedule.length; i++) {
    const date = addHours(parse(schedule[i].startDate), 2);
    result[getDate(date)].push({
      ...schedule[i],
      startDate: date,
    });
  }
  return {
    16: result[16].sort((a, b) => compareAsc(a.startDate, b.startDate)),
    17: result[17].sort((a, b) => compareAsc(a.startDate, b.startDate)),
    18: result[18].sort((a, b) => compareAsc(a.startDate, b.startDate)),
    19: result[19].sort((a, b) => compareAsc(a.startDate, b.startDate)),
    20: result[20].sort((a, b) => compareAsc(a.startDate, b.startDate)),
  }
}

const withScheduleData = mapProps(({ data }) => ({
  schedule: createSchedule(data.events[0].schedule),
}));

const App = ({ schedule }) => (
  <Schedule schedule={schedule} />
);

export default compose(graphql(Query), withLoadingIndicator, withScheduleData)(App);
