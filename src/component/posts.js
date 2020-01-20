import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



import '../styles/mysass.scss';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id: this.props.match.params.id
    };
  }

  componentDidMount = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${this.state.id}`)
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
    console.log("data is", data);
    return (
      <div className="postsBlock">
        <section className="card-container">
          {data.map((el, i) => (
          <Link to={`/user/${this.state.id}/posts/${el.id}`}>
          <article className="c-card" key={i}>
          <header className="c-card__header">
            <img
              src="http://placehold.it/350x200"
              className="c-card__image"
              alt="Card Image"
            />
          </header>

          <div className="c-card__body">
            <h2 className="c-card__title">{el.title}</h2>
            <p className="c-card__intro">
              {el.body}
            </p>
          </div>

          <footer className="c-card__footer">
            <p>Voir l'article</p>
            <p>{this.props.commt}</p>
          </footer>
        </article>
        </Link>
            
              
            
          ))}
        </section>
      </div>
    );
  }
}
export default Posts;