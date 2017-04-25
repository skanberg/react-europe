import React from "react";
import format from "date-fns/format";
import SwipeableViews from "react-swipeable-views";
import { Row, Block } from "jsxstyle";

const createSpeaker = ({ avatarUrl, name }) => (
  <div>
    <img
      style={{ width: 70, height: 70, borderRadius: "50%" }}
      src={avatarUrl}
    />
    {" "}
    {name}
  </div>
);

const createItem = (item, index) => (
  <div key={index}>
    {format(item.startDate, "HH:mm")}: {item.title}
    {item.speakers.map(createSpeaker)}
  </div>
);

const Tab = ({ day, onClick, selectDay, selected }) => (
  <Block
    width="20%"
    textAlign="center"
    paddingTop={10}
    paddingBottom={10}
    borderBottom={selected ? "4px solid white" : null}
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
        <Row width="100%" marginBottom={5}>
          <Tab day={1} selectDay={this.selectDay} selected={index === 0} />
          <Tab day={2} selectDay={this.selectDay} selected={index === 1} />
          <Tab day={3} selectDay={this.selectDay} selected={index === 2} />
          <Tab day={4} selectDay={this.selectDay} selected={index === 3} />
          <Tab day={5} selectDay={this.selectDay} selected={index === 4} />
        </Row>
        <SwipeableViews
          index={index}
          onChangeIndex={index => {
            this.selectDay(index + 1);
          }}
          resistance
        >
          <div>{schedule[16].map(createItem)}</div>
          <div>{schedule[17].map(createItem)}</div>
          <div>{schedule[18].map(createItem)}</div>
          <div>{schedule[19].map(createItem)}</div>
          <div>{schedule[20].map(createItem)}</div>
        </SwipeableViews>
      </div>
    );
  }
}

export default Schedule;
