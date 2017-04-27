import React from "react";
import SwipeableViews from "react-swipeable-views";
import { Row, Block } from "jsxstyle";
import Headroom from "react-headroom";
import Tab from "./Tab";
import Day from "./Day";

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.selectDay = this.selectDay.bind(this);
    this.getTabPosition = this.getTabPosition.bind(this);
    this.state = {
      index: 0,
      move: null,
    };
  }

  selectDay(day) {
    this.setState({
      index: day - 1,
    });
  }

  getTabPosition() {
    const { index, move } = this.state;
    return `${(move !== null ? move : index) * 20}%`;
  }

  render() {
    const { schedule } = this.props;
    const { index } = this.state;
    return (
      <div>
        <Headroom>
          <Row width="100%" backgroundColor="#3B5BA8" position="relative">
            <Tab day={1} selectDay={this.selectDay} />
            <Tab day={2} selectDay={this.selectDay} />
            <Tab day={3} selectDay={this.selectDay} />
            <Tab day={4} selectDay={this.selectDay} />
            <Tab day={5} selectDay={this.selectDay} />
            <Block
              position="absolute"
              backgroundColor="white"
              height={4}
              width="20%"
              bottom={0}
              style={{ left: this.getTabPosition() }}
            />
          </Row>
        </Headroom>
        <SwipeableViews
          index={index}
          onChangeIndex={index => {
            this.selectDay(index + 1);
          }}
          resistance
          onSwitching={(index, type) => {
            this.setState({
              move: type === "move" ? index : null,
            });
          }}
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
