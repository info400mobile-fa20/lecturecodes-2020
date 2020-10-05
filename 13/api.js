//Use export to let other file access this function
export const getMovies = async()=>{
 //wait for the fetch result to assign it to the response
 const response = await fetch("https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=f95MKrk0oNIBLGyk7LrHuq04HsBQN7dZ&order=by-opening-date");
 //wait for the reponse transforming to a json obejct
 const result = await response.json();

 return result;
 // console.log(result)
}

export const getStories = async()=>{
 //wait for the fetch result to assign it to the response
 const response = await fetch("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=f95MKrk0oNIBLGyk7LrHuq04HsBQN7dZ");
 //wait for the reponse transforming to a json obejct
 const result = await response.json();

 return result;
 // console.log(result)
}