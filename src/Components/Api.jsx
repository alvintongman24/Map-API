
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
