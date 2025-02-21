
// create an fetch

// lets fetch the data from the A
import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";


const Api = () => {
  const [data, setData] = useState(null);
  

  async function GetData() {
    try {
      const response = await axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=113571e6");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
      
      <MovieCard data={data} />
     
    </div>
  );
}

export default Api;



//   What You're Aiming For

// In this checkpoint, we are going to use the movie app we have created in the previous checkpoint and afterward, we will use the router library to route our views.


// Instructions

// We will add a description and the trailer link (embed video link) to the object movie.
// Every time I click on a movie card, it will take me to the movie description and trailer page.
// In the description page, I can navigate back to the home page.
  