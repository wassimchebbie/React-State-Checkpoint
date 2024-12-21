import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Wassim Chebbi",
        bio: "developer.",
        imgSrc: "https://files.oaiusercontent.com/file-GRyRkW6V2ioFu1Yy6XYhCj?se=2024-12-21T03%3A10%3A53Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3DWhatsApp%2520Image%25202024-12-20%2520at%252015.42.08_0650a549.jpg&sig=Ch5nztQK%2BcvPTU0xPMybJJcwzpVmxLAY%2BjI4Hjvc418%3D",
        profession: "Full-Stack Developer",
      },
      shows: false,
      timeSinceMount: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, timeSinceMount } = this.state;
    return (
      <div className="App">
        <h1>React State Checkpoint</h1>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div style={{ marginTop: "20px" }}>
            <img
              src={person.imgSrc}
              alt={person.fullName}
              style={{ borderRadius: "50%", width: "150px" }}
            />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h3>{person.profession}</h3>
          </div>
        )}
        <p>Time since mounted: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
