import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    
    const BOX_COUNT = 24;
    const BOXES = new Array(BOX_COUNT);
    
    for (let i = 0; i < BOXES.length; i++) {
     BOXES[i] = {
       id: i + 1,
       color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
      }
    }

    // set default state

    // bind methods to this
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
        <div className="App">{/* render boxes */}</div>
      </main>
    );
  }
}

export default App;
