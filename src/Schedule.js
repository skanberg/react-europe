import React from "react";
import SwipeableViews from "react-swipeable-views";
import cxs from "cxs";
import Headroom from "react-headroom";
import Tab from "./Tab";
import Day from "./Day";

const tabContainerClass = cxs({
  flexDirection: "row",
  display: "flex",
  width: "100%",
  backgroundColor: "#3B5BA8",
  position: "relative",
  boxShadow: "0 2px 2px 0 rgba(0,0,0,.14)",
});

const activeTabIndicatorClass = cxs({
  position: "absolute",
  backgroundColor: "#ffffff",
  height: 4,
  width: "20%",
  bottom: 0,
});

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
          <div className={tabContainerClass}>
            <Tab day={1} onClick={this.selectDay} selected={index === 0} />
            <Tab day={2} onClick={this.selectDay} selected={index === 1} />
            <Tab day={3} onClick={this.selectDay} selected={index === 2} />
            <Tab day={4} onClick={this.selectDay} selected={index === 3} />
            <Tab day={5} onClick={this.selectDay} selected={index === 4} />
            <div
              className={activeTabIndicatorClass}
              style={{ left: this.getTabPosition() }}
            />
          </div>
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
