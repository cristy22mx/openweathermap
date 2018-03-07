let fetch = require('node-fetch');

let darksky = 'https://api.darksky.net/forecast/';

let key ='714aac44315b4b45b9f67a427ab79711';

let lat = 45.3483,

let lng = -75.7584;

let uri = darksy + key + '/' + lat + ',' + lng;
console.log(uri);


let opitons = {
	method:'GET',
	mode:'cors'
}

let req = new fetch.Request(uri, opitons);

fetch(req)
	.then((response)=>{
		if (response.ok){
			return response.json();
		} else{
			throw new Error('Bad HTTP!')
		}
	});

	.then((j)=>{
		console.log('JSON data provided');
	})

	.catch ((err) =>{
		console.log('ERROR', err.message);
	});