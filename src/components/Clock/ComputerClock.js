import React from 'react';


class ComputerClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date()
        });
    this.state = {date: new Date};
  }

  render() {
    let {date, local} = this.state;
    return (
      <div>
        <h2>It is {date.toLocaleTimeString()}.</h2>
        <p>{local}</p>
      </div>
    );
  }
}

export default ComputerClock;