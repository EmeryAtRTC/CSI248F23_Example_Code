import { useState, useEffect } from "react";
import { fetchBeers } from "../Data/BeerRepository";
function Pagination() {
  //track beers []
  const [beers, setBeers] = useState([]);
  //track what page we are on
  const [currentPage, setCurrentPage] = useState(1);
  //tracking the loading
  const [loading, setLoading] = useState(true);
  //useEffect is going to load the first page
  useEffect(() => {
    //setLoading to try
    setLoading(true);
    fetchBeers(currentPage)
      .then((data) => setBeers(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [currentPage]);
  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <>
      <h2>Beers</h2>
      <div>
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
          Previous
        </button>
        <span>Page: {currentPage}</span>
        <button onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
      </div>
      <ul>
        {beers.map((beer) => {
          return (
            <li key={beer.id}>
              <h2>{beer.name}</h2>
              <p>
                {beer.description} {beer.attenuation_level}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Pagination;
