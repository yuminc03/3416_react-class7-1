import React from "react";
import axios from 'axios';
import Movie from "./Movie";
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    //console.log(movies);
    this.setState({ movies, isLoading: false });//코드 축약(ES6)
  };

  componentDidMount() {
    // 영화 데이터 로딩!
    this.getMovies();
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 6000);//6초가 로딩하면 "We are ready"
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map((movie) => {
              //console.log(movie);
              return (
                <Movie
                  key={movie.id} 
                  year={movie.year} 
                  title={movie.title} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image}
                />
              );
            })}
          </div>
        )}
    </section>
    );
  }
}
export default App;



// import React from 'react';
// import './App.css';
// import AxiosGet from './R_AxiosGet';

// function App() {
//     return (
//       <div>
//         <h1>Start React 200!</h1>
//         <AxiosGet/>
//       </div>
//     );
// }

// export default App;