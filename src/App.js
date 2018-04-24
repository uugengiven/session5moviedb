import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }

    this.loadMovies = this.loadMovies.bind(this);
  }

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies() {
    axios
      .get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b6fbc7f3f313bd395902af464ef47262")
      .then((response) => {
        this.setState({ movies: response.data.results});
      })
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.movies.map(movie => {
            return (<li>{movie.title}</li>);
          })}
        </ul>
      </div>
    );
  }
}

export default App;
