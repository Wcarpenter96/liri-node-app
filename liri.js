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
    var urlOMBD = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    axios.get(urlOMBD)
        .then(function (response) {
            movie = response.data;
            console.log(`
${movie.Title}
Released in ${movie.Year}
IMDB rated it ${movie.Ratings[0].Value} 
Rotten Tomatoes gave it a ${movie.Ratings[1].Value}  
Released in ${movie.Country}
Offered in ${movie.Language}
Plot summary: ${movie.Plot}
Actors: ${movie.Actors}
            `);
        })
        .catch(function (error) {
            console.log(error)
        });
}

if (process.argv[2] === 'concert-this') {

    let artist = process.argv.slice(3).join(" ");
    var urlBIT = `https://rest.bandsintown.com/artists/${artist}/events/?app_id=codingbootcamp`;
    console.log(urlBIT);
    axios.get(urlBIT)
        .then(function (response) {
            for (let i = 0; i < response.data.length; i++) {
                event = response.data[i];
                console.log(`
CONCERT ${i+1}
Name of Venue: ${event.venue.name}
Location: ${event.venue.city}, ${event.venue.country}
Date: ${event.datetime}

-----------------------------------------------------
                `);
            }
        })
        .catch(function (error) {
            console.log(error)
        });
}