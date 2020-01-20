import React, { Component } from "react";

import axios from "axios";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idPost: this.props.idPost,
      commt: []
    };
  }

  componentDidMount = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?postId=${this.state.idPost}`
      )
      .then(response => {
        if (response.status === 200 && response != null) {
          this.setState({
            commt: response.commt
          
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
       
       <p>{commt.length}</p>
      </div>
    );
  }
}
export default Comments;
