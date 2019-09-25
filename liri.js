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
    axios.get(queryUrl)
        .then(function (response) {
            m = response.data
            console.log('\n', m.Title, '\n',
                m.Year, '\n',
                m.Ratings[0].Source + ": " + m.Ratings[0].Value, '\n',
                m.Ratings[1].Source + ": " + m.Ratings[1].Value, '\n', 
                m.Country, '\n',
                m.Language, '\n',
                m.Plot, '\n',
                m.Actors,'\n');
        })
        .catch(function (error) {
            console.log(error)
        });
    }