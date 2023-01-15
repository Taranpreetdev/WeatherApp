const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b340d14128msha1e5ff9f3bdce68p118ee4jsnfb4555b496ab',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) =>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {


        console.log(response)


        // cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML  = response.humidity
        humidity2.innerHTML  = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset


    })
    .catch(err => console.error(err));

}

submit.addEventListener("click", (e) =>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Vancouver");

var col = 0 ;
function changeCityColor() 
{
    if(col==0)
    {
        document.getElementById("cityName").style.color="red";
        col=1;
    }
    else if (col==1) {
        document.getElementById("cityName").style.color="blue";
        col=2;
    }
    else
    {
        document.getElementById("cityName").style.color="yellow";
        col=0;
    }
}
setInterval(changeCityColor,500);
