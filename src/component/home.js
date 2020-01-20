import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
  
    
    axios
      .get(`https://jsonplaceholder.typicode.com/users/`)
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
    console.log("data is", data );
    return (
      <div className="postsBlock">
         {data.map((el, i) => (
          <div className="c-card">
            <img
              className="homeImg"
              src="https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296990_960_720.png"
            />
            <div  className="c-card__header">
            <h2 style={{margin:"0"}}>{el.name}</h2>
            <p style={{margin:"0"}}>{el.username}</p>
            <p style={{margin:"0"}}>{el.website}</p>
            <Link to={`user/${el.id}/posts/`} > <button className="homeButton" >Following</button></Link>
          </div>
          </div>
          ))}
      </div>
    );
  }
}
export default Home;