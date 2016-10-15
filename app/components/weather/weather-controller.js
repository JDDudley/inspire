(function (){
	
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		console.log(weather);
		//What can you do with this weather object?
		var objWeather = JSON.parse(weather);
		var temp = objWeather.main.temp;
		var fTemp = temp * 9 / 5 - 459.67;
		var cTemp = temp - 273.15;
		fTemp = Math.round(fTemp);
		cTemp = Math.round(cTemp);
		var icon = 'http://openweathermap.org/img/w/' + objWeather.weather[0].icon + '.png';
		var condition = objWeather.weather[0].main;
		var template = `<h2>${objWeather.name}</h2><img src="${icon}" aria-hidden="true"><h4>${condition}, <span id="c-temp">${cTemp}° C</span><span id="f-temp">${fTemp}° F</span></h4>`;
		$('#weather').html(template);
		$('#c-temp').hide();
	})
	
	//toggle temp
	$('#weather').on('click',function() {
		$('#c-temp').toggle();
		$('#f-temp').toggle();
	})
	
	
	
}())
