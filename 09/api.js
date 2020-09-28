//Use export to let other file access this function
export const getWeather = async()=>{
 //wait for the fetch result to assign it to the response
 const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Bloomington,Indiana&appid=<apikey>");
 //wait for the reponse transforming to a json obejct
 const result = await response.json();

 return result;
 // console.log(result)
}
