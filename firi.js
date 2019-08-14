require("dotenv").config();

var keys = require("./keys.js");


var fs = require("fs");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var userAction = process.argv[2];
// search multiple words

var theSearch = process.argv.splice(3).join(" ");

//begin the functions
//spotify first

var spotifyCall = function () {

    spotify.search({ type: "track", query: theSearch }, function (err, data) {
        if (err) {
            return console.log("somethings wrong: " + err);
        };

        // console.log(data.tracks.items);
        var theArtist = data.tracks.items;

        console.log("Artist name: " + theArtist[0].artists[0].name);
        console.log("Song name: " + theArtist[0].name);
        console.log("Preview the song here!: " + theArtist[0].preview_url);
        console.log("The album: " + theArtist[0].album.name);
    });
};

//bands in town call

var bandCall = function () {

    axios.get("https://rest.bandsintown.com/artists/" + theSearch + "/events?app_id=codingbootcamp")
        .then(function (response) {
            var theConcert = response.data;

            console.log("They will be playing at: " + theConcert[0].venue.name);
            console.log("Located at: " + theConcert[0].venue.latitude + ", " +
                theConcert[0].venue.longitude);
            console.log("They concert is at: " + theConcert[0].datetime);

        })
        .catch(function (error) {
            if (error) {
                console.log("somethings wrong!")
            };

        });
};

//movie time!

var movieCall = function () {
    axios.get("http://www.omdbapi.com/?t=" + theSearch + "&y=&plot=short&apikey=trilogy")
        .then(function (response) {

            var theInfo = response.data;

            console.log(theInfo.Title);
            console.log("This movie came out on " + theInfo.Released + ".");
            console.log("The IMDB rating is " + theInfo.imdbRating + ".");
            console.log("This movie is " + theInfo.Ratings[1].Value + " rotten");
            console.log("It was produced in " + theInfo.Country + ".");
            console.log("The available languages are " + theInfo.Language + ".");
            console.log("Here's a little summary of it: " + theInfo.Plot);
            console.log("Because of " + theInfo.Actors + "this movie was made possible.");
        })
        .catch(function (error) {
            if (error) {
                console.log("something is wrong!")
            };
        });
};



//the request and respond 

switch (userAction) {
    case "spotify":
        spotifyCall();
        break;
    case "concert":
        bandCall();
        break;
    case "movie":
        movieCall();
        break;
};


