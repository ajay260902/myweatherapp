const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '73db9db351msh2aae827693726bbp136631jsn9025d050e54d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
	cityName.innerHTML=city


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
        
		console.log(response)
        //cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		temp3.innerHTML = response.temp
		temp4.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		humidity3.innerHTML = response.humidity
		humidity4.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_speed3.innerHTML = response.wind_speed
		wind_speed4.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset

		

	})
	.catch(err => console.error(err));

}

	 submit.addEventListener("click",(e)=>{

		e.preventDefault()
		getWeather(city.value)

	 })
	 getWeather("Delhi")