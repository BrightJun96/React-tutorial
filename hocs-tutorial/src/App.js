import React, { Component } from "react";

function withCounter(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    increment = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          increment={this.increment}
          {...this.props}
        />
      );
    }
  };
}

class Component1 extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <button onClick={increment}>Clicked {count} times!</button>
      </div>
    );
  }
}
export const DerivedComponent = withCounter(Component1);
