import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Comments from "./comments"

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
        idUser: this.props.match.params.id,
        idPost: this.props.match.params.idPost,
        data: []
    };
  }

  componentDidMount = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.state.idPost}`)
      .then(response => {
        if (response.status === 200 && response != null) {
          this.setState({
            data: response.data
          });
        } else {
          console.log("problem");
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { data } = this.state;
    return (
        <div className="detail">
            <div className="homeImg"><img src="https://via.placeholder.com/400x225"/></div>
            <div className="title"><h1>{data.title}</h1></div>
            <div className="body"><p>{data.body}</p></div>
            <h3>Comments</h3>
            <Comments idPost={this.state.idPost} />
        </div>

    );
  }
}
export default Details;