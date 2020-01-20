import React, { Component } from "react";
import Posts from './posts'

import axios from "axios";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idPost: this.props.idPost,
      data: []
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
            data: response.data
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
    const { data } = this.state;
    return (
      <div className="comments">
        {data.map((el, i) => (
          <div key={i}>
            <div className="message">
              <div className="container">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NjYzMzE1MV5BMl5BanBnXkFtZTgwNTA4NDY4OTE@._V1_UX172_CR0,0,150,150_AL_.jpg"
                  className="c-card__image"
                  alt="Card Image"
                />

                <p>
                  <span>{el.name}</span>{" "}
                </p>
                <p>{el.body}</p>
                <Posts lenght= {data.lenght}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Comments;
