import React from "react";
import SwipeableViews from "react-swipeable-views";
import { Row, Block } from "jsxstyle";
import Headroom from "react-headroom";
import Day from "./Day";

const Tab = ({ day, onClick, selectDay, selected }) => (
  <Block
    width="20%"
    textAlign="center"
    paddingTop={10}
    paddingBottom={10}
    borderBottom={selected ? "4px solid white" : "1px solid #2F4592"}
  >
    <div
      onClick={() => {
        selectDay(day);
      }}
    >{`Day ${day}`}</div>
  </Block>
);

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.selectDay = this.selectDay.bind(this);
    this.state = {
      index: 0,
    };
  }

  selectDay(day) {
    this.setState({
      index: day - 1,
    });
  }

  render() {
    const { schedule } = this.props;
    const { index } = this.state;
    return (
      <div>
        <Headroom>
          <Row width="100%" backgroundColor="#3B5BA8">
            <Tab day={1} selectDay={this.selectDay} selected={index === 0} />
            <Tab day={2} selectDay={this.selectDay} selected={index === 1} />
            <Tab day={3} selectDay={this.selectDay} selected={index === 2} />
            <Tab day={4} selectDay={this.selectDay} selected={index === 3} />
            <Tab day={5} selectDay={this.selectDay} selected={index === 4} />
          </Row>
        </Headroom>
        <SwipeableViews
          index={index}
          onChangeIndex={index => {
            this.selectDay(index + 1);
          }}
          resistance
        >
          <Day schedule={schedule[16]} />
          <Day schedule={schedule[17]} />
          <Day schedule={schedule[18]} />
          <Day schedule={schedule[19]} />
          <Day schedule={schedule[20]} />
        </SwipeableViews>
      </div>
    );
  }
}

export default Schedule;
