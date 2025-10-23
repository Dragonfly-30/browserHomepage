// import { WEATHERAPI_KEY } from "../config.js"
import { WEATHERAPI_KEY } from "../../config.js"

export function weatherData() {
  const base_url = 'https://api.openweathermap.org/data/2.5/weather'
  const api_key = WEATHERAPI_KEY
  const city = "delhi"

  const complete_url = `${base_url}?q=${city}&appid=${api_key}&units=metric`

  const getWeather = async () => {
    try {
      console.log("Fetching weather data from:", complete_url)
      const response = await fetch(complete_url);
      if (!response.ok) throw new Error(`Response status: ${response.status}`)

      const data = await response.json();

      const weatherInfo = document.querySelector('#weatherInfo')

      weatherInfo.innerHTML = `Temperature: <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="icon"> ${data.main.temp}&deg;C`;

      // console.log(data);
    } catch (err) {
      console.error(`Fetch error: ${err}`)
    }
  }
  getWeather()

}


// this is without async await version
// fetch(url).then((data)=>{
//   console.log(data)
// }).catch(err){
//   console.error(err)
// }

//
// fetch(url).then((response)=>{
//   if(!response.ok){
//     throw new Error (`Response status: ${response.status}`)
//   }
//   return response.json();
//
// }).then((data)=>{
//     console.log(data);
//   }).catch((err)=>{
//     console.error(`Fetch Error: ${err}`)
//   })

