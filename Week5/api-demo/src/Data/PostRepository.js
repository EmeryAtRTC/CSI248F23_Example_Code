//Class that is going to send the requests for the POSTS API
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = async () => {
  //axios is a lot simpler to use
  //axios.get(url,{parameters})
  try {
    //create a one second delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await axios.get(BASE_URL);
    //automatically parses to json
    return response.data;
  } catch (error) {
    throw error;
  }
};
