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

  }

  tick() {
    fetch("http://worldtimeapi.org/api/timezone/America/Fortaleza").then(res => res.json()).then(
      (result) => {
        let time = new Date(result.toString);
        console.log("fetched -> "+result)
        this.setState({
          isLoaded: true,
          date: time
        });
      },
      (error) => {
        this.setState({
          isLoaded: true       
        });
      }
    );
  }

  render() {
    let {date, local, isLoaded} = this.state;

    if (!isLoaded){
      return (<h2>Loading...</h2>);
    }
    else{
    return (
      <div>
        <h2>It is {date.getHours()}.</h2>
        <p>{local}</p>
      </div>
    );

    }
  }
}

export default WorldClock;