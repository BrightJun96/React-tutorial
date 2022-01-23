import { Component } from "react";

class ButtonCounter extends Component {
  render() {
    const { count, increment } = this.props;

    return <button onClick={increment}>Clicked {count} times!</button>;
  }
}

export default ButtonCounter;
