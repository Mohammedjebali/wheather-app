const Apikey="29c89b65ba869cda02b06d7606e6002b"
const apiURL="http://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weathericon=document.querySelector(".weather-icon")

async function checkweather(city) {

    const response =await fetch(apiURL+city+`&appid=${Apikey}`)

    if (response.status ===404) {
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"

    } else {
        const data=await response.json()
        console.log(data);
        
    }
    
}
searchBtn.addEventListener("click",function(){
    checkweather(searchBox.value)
})