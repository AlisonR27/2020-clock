import React from 'react';
import '../../style/ComputerClock.css'

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
        <h2>São {date.toLocaleTimeString()} em {local} </h2>
        <table>
          <tr>
            <td>{date.getHours()}</td>
            <td>{date.getMinutes()}</td>
            <td>{date.getSeconds()}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default ComputerClock;