import React, { Component } from "react";
import Record from "./Record";

class MouseTracker extends Component {
  state = {
    x: 0,
    y: 0,
  };

  handleMouseMove = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };
  render() {
    return (
      <div
        style={{
          height: "100vh",
        }}
        onMouseMove={this.handleMouseMove}
      >
        {this.props.render(this.state.x, this.state.y)}
      </div>
    );
  }
}

export default MouseTracker;

export function withMouse(Component) {
  return class extends Component {
    render() {
      return (
        <MouseTracker
          render={(mouse) => {
            return <Component {...this.props} mouse={mouse} />;
          }}
        />
      );
    }
  };
}
