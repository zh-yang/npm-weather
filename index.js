#!/usr/bin/env node
var axios = require('axios')
//console.log(process.argv)

var data = {}

if(process.argv[2]){
	data.params = {
		city : process.argv[2]
	}
}

axios.get('http://api.jirengu.com/weather.php',data).then(function (res) {
	
	if(!res.data.results){
		console.log('今天访问超限了！！！')
		return
	}
	
	var weather =  res.data.results[0].weather_data[0]
	
	console.log(weather.date)
	console.log(weather.temperature)
	console.log(weather.weather,weather.wind)
	console.log('pm25: '+res.data.results[0].pm25)

}).catch(function(error){
	console.log(error)
})



