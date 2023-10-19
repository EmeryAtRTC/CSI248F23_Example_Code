import axios from "axios";
const BASE_URL = "https://api.punkapi.com/v2/beers";

//make an async function to export
export const fetchBeers = async (page = 1, perPage = 10) => {
  try {
    //simulate the same delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    //let's make our axios request
    //axios.get takes a url and it can params
    const response = await axios.get(BASE_URL, {
      params: {
        page: page,
        per_page: perPage,
      },
    });
    //return the array of beers
    return response.data;
  } catch (error) {
    //we will throw any errors
    throw error;
  }
};
