// TODO:

// do-what-it-says

require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

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
        .catch(function (err) {
            console.log(err)
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
CONCERT ${i + 1}
Name of Venue: ${event.venue.name}
Location: ${event.venue.city}, ${event.venue.country}
Date: ${event.datetime}

-----------------------------------------------------
                `);
            }
        })
        .catch(function (err) {
            console.log(err)
        });
}

if (process.argv[2] === 'spotify-this-song') {   
    
    let songTitle = process.argv.slice(3).join(" ");
    spotify
        .search({ type: 'track', query: songTitle })
        .then(function (response) {
            song = response.tracks.items[0];
            console.log(``);
            console.log(song.name)
            for (let i = 0; i < song.artists.length; i++) {
                if (i === 0) console.log(`by ${song.artists[i].name}`);
                else console.log(`and ${song.artists[i].name}`);
            }
            console.log(`from ${song.album.name}`)
            console.log(`Preview: ${song.external_urls.spotify}
            `)
        })
        .catch(function (err) {
            console.log(err);
        });
}