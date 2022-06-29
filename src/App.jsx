import "./App.css";
import { Component } from "react";
import Box from "./components/Box";

class App extends Component {
  constructor(props) {
    super(props);

    const BOX_COUNT = 24;
    const BOXES = new Array(BOX_COUNT);

    for (let i = 0; i < BOX_COUNT; i++) {
      BOXES[i] = {
        id: i + 1,
        color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
      }
    }

    // set default state
    this.state = {
      boxeS: BOXES
    }
    // bind methods to this
    this.handleClick = this.handleClick.bind(this)
  }

  getRandomColor() {
    return Math.round(Math.random() * 255)
  }

  handleClick(event) {
    let updateBoxes = this.state.boxeS.map((box) => {
      if (box.id == event.target.id) {
        box.color = `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
      }
      return box
    })
    this.setState({ boxes: updateBoxes })
  }

  render() {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React: State and Props</h1>
        <div className="App">
          <span>this is a span</span>

          {this.state.boxeS.map((box) => {
            // console.log(box)
            return <Box key={box.id} id={box.id} color={box.color} onClick={this.handleClick} />
          })}
        </div>
      </main>
    );
  }
}

export default App;
