import React from 'react';


class WorldClock   extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      date: new Date(),
      local: "Natal",
      timezone: "+03:00"
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    fetch("http://worldtimeapi.org/api/timezone/America/Fortaleza")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          date: result.utc_datetime
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  tick() {
    this.setState({
      date: new Date(),
      local: "mudou"
    });
    this.state = {date: new Date};
  }

  render() {
    if (!isLoaded){
      return (<h2>Loading...</h2>);
    }
    else{
      let {date, local} = this.state;
    return (
      <div>
        <h2>It is {date.toLocaleTimeString()}.</h2>
        <p>{local}</p>
      </div>
    );

    }
  }
}

export default WorldClock;