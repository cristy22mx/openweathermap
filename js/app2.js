
const apiLoad = () => {
   fetch(`https://swapi.co/api/films/`, {method: 'GET'})
       .then(function(response) {
           response.json().then(function(result) {
               paintMovies(result.results);
       });
   })
       .catch(function(err) {
           console.log(err);
       });
};