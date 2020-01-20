import React, { Component } from "react";

import axios from "axios";

class NbComments extends Component {
  constructor(props) {
    super(props);
    this.state = { nb: 0 };
  }

  componentDidMount = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?postId=${this.props.idPost}`
      )
      .then(response => {
        if (response.status === 200 && response != null) {
          this.setState({
            nb: response.data.length
          });
        } else {
          console.log("erreur: " + response.status);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="comments">
        <p>{this.state.nb}</p>
      </div>
    );
  }
}
export default NbComments;