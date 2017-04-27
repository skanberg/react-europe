import React from "react";
import { gql, graphql } from "react-apollo";
import { compose, mapProps, branch, renderComponent } from "recompose";
import parse from "date-fns/parse";
import addHours from "date-fns/add_hours";
import compareAsc from "date-fns/compare_asc";
import getDate from "date-fns/get_date";
import Schedule from "./Schedule";
import LoadingIndicator from "./LoadingIndicator";
import "./App.css";

const query = gql`
  query conferenceSchedule {
    events(slug: "reacteurope-2017") {
      schedule {
        title
        description
        startDate
        type
        length
        speakers {
          name
          avatarUrl
          twitter
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

  const sort = list =>
    list.sort((a, b) => compareAsc(a.startDate, b.startDate));

  return {
    16: sort(result[16]),
    17: sort(result[17]),
    18: sort(result[18]),
    19: sort(result[19]),
    20: sort(result[20]),
  };
}

const withScheduleData = mapProps(({ data }) => ({
  schedule: createSchedule(data.events[0].schedule),
}));

const App = ({ schedule }) => <Schedule schedule={schedule} />;

export default compose(graphql(query), withLoadingIndicator, withScheduleData)(
  App,
);
