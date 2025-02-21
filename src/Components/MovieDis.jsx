import React from 'react';
import { Link } from 'react-router-dom';

function MovieDis({ newpage }) {
 
  return (
    <section className="">
      <Link to="/">
        <h1 className="text-left text-4xl border border-1 bg-pink-200">HOME PAGE</h1>
      </Link>
<div className='text-5xl text-center m-20'>
      <h1>Description:Epic Movie</h1>
      </div>

    </section>
  );
}

export default MovieDis;
