class Bars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      colorSelector: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        height: 20,
        colorSelector: Math.floor(Math.random() * 5),
      });
    }, 500);
  }

  render() {
    const colors = ["#39d353", "#0e4429", "#006d32", "#26a641", "#161b22"];
    return (
      <div
        className="random"
        style={{
          transform: `translateY(${this.state.height})`,
          height: this.state.height + "px",
          width: this.state.height + "px",
          backgroundColor: colors[this.state.colorSelector],
        }}
      ></div>
    );
  }
}

class App extends React.Component {
  render() {
    let dots = [];
    for (let i = 0; i < 1250; i++) {
      dots.push(<Bars />);
    }
    return (
      <div className="App">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <div className="profile" alt="avator">
            <div className="profile-inner"></div>
          </div>
          <div className="center">
            <div>Dev washie</div>
            <div>
              <i className="far fa-check-circle" />
            </div>
            <div>Certified Web Developer</div>
            <button className="tour-btn">Start</button>
          </div>
          {dots}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
