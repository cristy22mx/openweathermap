(function(){
	
	const API_KEY = 'e6217b568aebf8585bdbc212351f452a';
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather?APPID=' + API_KEY + '&';
	const IMG_WEATHER = 'https://api.openweathermap.org/img/w/';


    var cityWeather = {};
    cityWeather.zone;
    cityWeather.icon;
    cityWeather.temp;
    cityWeather.temp_max;
    cityWeather.temp_min;
    cityWeather.main;

	if(navigator.geolocation){

	navigator.geolocation.getCurrentPosition(getCoords, errorFound);

	} else{
		alert ("Actualiza tu navegador")
	}


function errorFound (error){
	alert("Ocurrió un error: " + error.code);
	// 0: Error desconocido
	// 1: Permiso denegado
	// 2: Posición no está disponible
	// 3: Timeout
};

function getCoords(position){
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	//console.log ("Tu posición es: " + lat + "," + lon);
	//var ejemplo1 = API_URL + API_KEY +'/' + lat + ',' + lon;
	$.getJSON(API_URL + "lat=" + lat + '&lon=' + lon).done(data=>{getCurrentWeater(data)})
	// console.log(completeSky);
};

	function getCurrentWeater(data){
	cityWeather.zone = data.name;
	console.log(cityWeather.zone);
	//cityWeather.icon = IMG_WEATHER + data.weater[0].icon + ".png";
    cityWeather.temp = data.main.temp - 273,15;
    console.log(cityWeather.temp);
    cityWeather.temp_max = data.main.temp_max -273.15;
    console.log(cityWeather.temp);
    cityWeather.temp_min = data.main.temp_min -273.15;
    console.log(cityWeather.temp);
    //cityWeather.main = data.weater[0].main;
    //console.log(cityWeather.temp);
	renderTemplate();
	};

	function activeTemplate(id){
		var t = document.querySelector(id);
		return document.importNode(t.content, true);
	};

	function renderTemplate(){
		var clone = activeTemplate("#template--city");
		clone.querySelector("[data-time]").innerHTML;
		//clone.querySelector("[data-city]").innerHTML = cityEeather.zone;
		//clone.querySelector("[data-icon]").src = cityWeather.icon;
		clone.querySelector("[data-temp='max']").innerHTML = cityWeather.temp_max.toFixed(1);
		clone.querySelector("[data-temp='min']").innerHTML = cityWeather.temp_min.toFixed(1);
		clone.querySelector("[data-temp='current']").innerHTML = cityWeather.temp.toFixed(1);

		$("body").append(clone);

	}

})();






// https://api.darksky.net/forecast/707d5c20696c47178543c0c1188858da/37.8267,-122.4233