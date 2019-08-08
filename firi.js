require("dotenv").config();

var keys = require("./keys.js");


var fs = require("fs");
var axios = require("axios");
var spotify = require("node-spotify-api");
var spotifyKey = new spotify(keys.spotify);
var userAction = process.argv[2];
var theArtist = process.argv[3];
//begin the functions
//spotify first

var spotifyCall = function () {

    spotify.search({ type: "track", query: theArtist }, function (err, data) {
        if (err) {
            return console.log("somethings wrong: " + err);
        }

        console.log(data);
    });
}

switch (userAction) {
    case "artist":
        spotifyCall();
        break;




}


