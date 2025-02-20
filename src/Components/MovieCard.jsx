import React from "react";
import { useState } from "react";

function MovieCard({ data }) {
    console.log(data);


        const [newMovie, setNewMovie] = useState("");
  
     
      
        const handleClick = () => {
          const movie = "SpiderMan";
          setNewMovie(movie);
          console.log(`New Movie: ${movie}`);
        };

     
    if (!data) {
      return <p>Loading...</p>;
    }
  
  

    const filteredData = data.Ratings.filter(item => item.Source === 'Rotten Tomatoes');
    
         
         
  
    return (
      <section className="bg-white text-black  h-screen  text-center">

<div>

  
<h2>Ratings:</h2>
{data.Ratings.map((item, index) => (
  <h1 key={index}>{item.Source}: {item.Value}</h1>
))}
</div>
       
  
        <div className="">
          <h2 > title:{data.Title}</h2>
          <p>description:{data.Plot}</p>
         <p>posterURL <img src={data.Poster} className="mx-auto py-5" /></p> 
        </div>


          <div className="flex justify-around items-center">
              <button className="bg-black border border-1 text-white p-5 rounded-lg" onClick={handleClick} >Click Here For Next Movie</button>
              <h1 className="text-5xl">{newMovie}</h1>
            
          </div>


          <div>
        <h2>Ratings:</h2>
        {filteredData.map((item, index) => (
          <h1 key={index}>{item.Source}: {item.Value}</h1>
        ))}
      </div>

      </section>
    );
  }
  



  export default MovieCard;
  