
// At the top of the liri.js file, add code to read and set any environment variables
//  with the dotenv package:


var config = require("dotenv").config();




var Twitter = require('twitter');
//var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require('fs');
var keys = require('./keys.js');

//var spotify = new Spotify(keys.spotify);


//Taking  action 
var action = process.argv[2];
//Telling the action what to do
var argument = "";


    if(action === "my-tweets"){
        // node liri.js my-tweets
        // This will show your last 20 tweets and when they were created at in your terminal/bash window.
        console.log("get-tweets");
        getTweets();

    }else if(action ==="spotify"){

        console.log("A song");
        //Call Spottify Func

    }else if(action === "movie-this"){
        //Call getMovie Func
        console.log("movie");

    }else if(!action){
        //Talk shit 
        console.log("What?? What do you want??Say something then or I dont know what to do");
    }else{
        //Call do something func
        console.log("do what it says");

    }
///get Tweets function
function getTweets(){
    //should then be able to access your keys information like so
//I am sure it is not in a right place. I'll figure it out
    var client = new Twitter(keys.twitter);


    var params = {q: '@BenyaminRogie', count: 1};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
      //  console.log(tweets);
        console.log(tweets[0].text); //TESTING
      }
    });
    }
    
///Get song Function
///get movie function
///do what it says fuunction




 

