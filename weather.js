var apiK="23b171e72b6ac76e448ad23cd4911f9a"
var apiU= "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

var searchBox= document.querySelector(".search input")
var searchBtn=document.querySelector(".search button")
var page = document.querySelector(".weather")
var image= document.querySelector(".weather-icon")

async function weather(city){
  const myFetch=  await fetch(apiU + city+ `&appid=${apiK}`)
  var myData = await myFetch.json();
  console.log(myData)

 
document.querySelector(".city").innerHTML= myData.name
document.querySelector(".temp").innerHTML= Math.round(myData.main.temp)+"°C"
document.querySelector(".humidity").innerHTML= myData.main.humidity +"%"
document.querySelector(".wind").innerHTML= myData.wind.speed + "km/h"

if(myData.weather[0].main == "Clouds"){
  image.src="images/clouds.png"
}else if(myData.weather[0].main == "clear"){
  image.src="images/clear.png"
}else if(myData.weather[0].main == "drizzle"){
  image.src="images/drizzle.png"
}else if(myData.weather[0].main == "rain"){
  image.src="images/rain.png"
}else if(myData.weather[0].main == "snow"){
  image.src="images/snow.png"
}

}
searchBtn.addEventListener("click", function(){
    weather(searchBox.value)
    page.style.display="block"

})

