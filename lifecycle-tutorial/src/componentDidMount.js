import React, { Component } from "react";

class ComponentDidMount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          data: json,
        })
      );
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        {this.state.data.map((data) => {
          return (
            <p key={data.name}>
              id:{data.id} , user : {data.username} , name :{data.name}, website
              : {data.website}
            </p>
          );
        })}
      </div>
    );
  }
}

export default ComponentDidMount;
