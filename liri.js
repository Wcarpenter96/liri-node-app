require("dotenv").config();
var fs = require('fs');
var keys = require("./keys.js");
var axios = require("axios");
var inquirer = require("inquirer");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// Runs logic for movie-this command
function movieThis(movieName) {
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

// Runs logic for concert-this command
function concertThis(artist) {
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
Date: ${moment(event.datetime).format('MM/DD/YYYY')}

-----------------------------------------------------
            `);
            }
        })
        .catch(function (err) {
            console.log(err)
        });
}

// Runs logic for spotify-this-song command
function spotifyThisSong(songTitle) {
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
// Prompts user to select a Liri command
inquirer.prompt([
    {
        type: "list",
        name: "choice",
        message: "What would you like liri to do?",
        choices: ['movie-this', 'concert-this', 'spotify-this-song', 'do-what-it-says'],
    }
]).then(function (response) {

    switch (response.choice) {
        case 'movie-this':
            inquirer.prompt([
                {
                    name: "name",
                    message: "Enter the name of a movie!",
                    default: "Mr. Nobody"
                }
            ]).then(function (movie) {
                movieThis(movie.name);
            });
            break;

        case 'concert-this':
            inquirer.prompt([
                {   
                    name: "name",
                    message: "Enter the name of an artist!",
                    default: "Jacob Collier"
                }
            ]).then(function (artist) {
                concertThis(artist.name);
            });
            break;

        case 'spotify-this-song':
            inquirer.prompt([
                {
                    name: "name",
                    message: "Enter the name of a song!",
                    default:"The Sign, Ace of Base"
                }
            ]).then(function (song) {
                spotifyThisSong(song.name);
            });
            break;

        case 'do-what-it-says':
            fs.readFile("random.txt", "utf8", function (err, data) {
                if (err) return console.log(err);
                var dataArr = data.split(",");
                if (dataArr[0] === 'movie-this') {
                    movieThis(dataArr[1]);
                } else if (dataArr[0] === 'concert-this') {
                    concertThis(dataArr[1]);
                } else if (dataArr[0] === 'spotify-this-song') {
                    spotifyThisSong(dataArr[1]);
                } else
                    console.log(`Cannot read file!`);
            });
            break;
    }
});
