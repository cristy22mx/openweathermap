(function(){
	
    var API_URL = 'https://api.darksky.net/forecast/';
	var API_KEY = '714aac44315b4b45b9f67a427ab79711';
	//console.log(API_URL);


    // var cityWeather = {};
    // cityWeather.zone;
    // cityWeather.icon;
    // cityWeather.temp;
    // cityWeather.temp_max;
    // cityWeather.temp_min;
    // cityWeather.main;

	if(navigator.geolocation){

	navigator.geolocation.getCurrentPosition(getCoords, errorFound);

	} else{
		alert ("Actualiza tu navegador")
	}


function errorFound (error){
	alert("Ocurrió un error: " +err.code);
	// 0: Error desconocido
	// 1: Permiso denegado
	// 2: Posición no está disponible
	// 3: Timeout
};

function getCoords(position){
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	//console.log ("Tu posición es: " + lat + "," + lon);
	fetch = ('API_URL + API_KEY +'/' + lat + ',' + lon')
		.then(function(response) {
           response.json().then(function(result) {
               paintMovies(result.results);
       });
   })
       .catch(function(err) {
           console.log(err);
       });
};

const paintMovies = (detailsMovies) => {
	console.log(detailsMovies)
}

})();






// https://api.darksky.net/forecast/707d5c20696c47178543c0c1188858da/37.8267,-122.4233