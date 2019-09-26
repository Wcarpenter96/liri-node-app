// TODO:

// concert-this
// spotify-this-song
// do-what-it-says

require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
var axios = require("axios");

if (process.argv[2] === 'movie-this') {
    let movieName = process.argv.slice(3).join(" ");
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    console.log(queryUrl);
    axios.get(queryUrl)
        .then(function (response) {
            m = response.data;
            console.log(`
Title: ${m.Title}
Year released: ${m.Year}
IMDB Rating: ${m.Ratings[0].Value} 
Rotten Tomatoes Rating: ${m.Ratings[1].Value}  
Released in: ${m.Country}
Offered in: ${m.Language}
Plot summary: ${m.Plot}
Actors: ${m.Actors}
            `);
        })
        .catch(function (error) {
            console.log(error)
        });
}

if (process.argv[2] === 'concert-this') {

}