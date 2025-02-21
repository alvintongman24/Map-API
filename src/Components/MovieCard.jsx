import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieDis from './MovieDis';

function MovieCard({ data }) {
  console.log(data);

  const [newMovie, setNewMovie] = useState({});
  const [newpage, setNepage] = useState({});

  useEffect(() => {
    setNepage(data);
  }, [data]);

  const handleClick = () => {
    const movie = {
      Title: "SpiderMan",
      Plot: "A superhero film based on the Marvel Comics character Spider-Man.",
      Poster: "path_to_spiderman_poster.jpg" // Change this to your actual poster URL
    };
    setNewMovie(movie);
    console.log(`New Movie: ${movie.Title}`);
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <section className="bg-white text-black h-screen text-center">
      <div className="border border-1 w-auto h-auto">
        <p>Poster URL: <img src={data.Poster} className="mx-auto py-5 m-8" alt={data.Title} /></p> 
        <Link to="/Movie" className="bg-black border border-1 text-white p-2 rounded-lg text-xl m-8">Description</Link>
      </div>

      <div className="flex justify-around items-center">
        <button className="bg-black border border-1 text-white p-5 rounded-lg" onClick={handleClick}>Click Here For Next Movie</button>
        <h1 className="text-5xl">{newMovie.Title}</h1>
      </div>

      <MovieDis newpage={newpage} />
    </section>
  );
}

export default MovieCard;

  





