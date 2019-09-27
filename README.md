# LIRI-NODE-APP
Liri is a command line node app that takes in parameters and gives back data.

---

### **INSTRUCTIONS**

**Before you begin:** 
1. Make sure that you include a `.env` file to access your Spotify ID and Secret
2. Make sure all necessary node packages are installed

To run Liri, navigate to `liri-node-app` and type the following into your console:

```
node liri.js
```

Liri will prompt you to select from a list of commands

---

### **VIDEO**

[Click here](https://drive.google.com/file/d/1WKaFPVEiKZKuadcJWVI9SnvB-y0kvV9o/view) for a screencast that walks through the app.

---

### **COMMANDS**

Liri offers five commands:

   * `movie-this`

   * `concert-this`

   * `spotify-this-song`

   * `do-what-it-says`
   
   * `clear-log`


### Movie-this

Movie-this uses the `Axios` node package to request data from the OMBD API via a query url. The command takes in one user input, **the movie title**, with the default being _Mr. Nobody_. Once run, the command outputs the following:
 ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
 ```
The data is formatted and logged to the console as well as `log.txt`. 

### Concert-this

Concert-this uses the `Axios` node package to request data from the Bands in Town API via a query url. The command takes in one user input, **the name of the band/artist)**, with the default being _Jacob Collier_. Once run, the command outputs the following for i<sup>th</sup> upcoming concert that the artist is performing in:

 ```
        CONCERT i
       * Name of the Venue
       * Venue location.
       * Date of the Event (moment is used to format this as "MM/DD/YYYY")
```

The data is formatted and logged to the console as well as `log.txt`. 

### Spotify-this-song

Spotify-this-song uses the `node-spotify-api` node package to request data from Spotify's API via query url. The command takes in one user input, **the name of the song (and artist, if desired)**, with the default being _The Sign, Ace of Base_. Once run, the command outputs the following:

``` 
     * The song's name
     * Artist(s)
     * The album that the song is from
     * A preview link of the song from Spotify
```
The data is formatted and logged to the console as well as `log.txt`. 

### Do-what-it-says

Do-what-it-says uses the `fs` node package to read the text in `random.txt`. The file currently reads 

```
spotify-this-song,"I Want it That Way"
```

which would envoke the `spotify-this-song` command with an input of _I Want it That Way_. The data is formatted and logged to the console as well as `log.txt`. 

### Clear-log

Clear-log uses the `fs` node package to clear the `log.txt` file. 

---

### **NODE PACKAGES**

   * `axios`

   * `dot-env`

   * `fs`

   * `inquirer`
   
   * `moment`
    
   * `node-spotify-api`
