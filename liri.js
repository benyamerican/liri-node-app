
// At the top of the liri.js file, add code to read and set any environment variables
//  with the dotenv package:


var config = require("dotenv").config();




var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require('fs');
var keys = require('./keys.js');
var omdbApi = require('omdb-client');



//Taking  action 
var action = process.argv[2];
var argument = process.argv[3];
//var argument= [];
//What ever comes after Action takes as argument
// for(var i = 3; i < process.argv.length; i++){
//     var argumentTaken =  [process.argv[i]];
//     var argumentGiven = argumentTaken.join(argumentTaken).join("  ");

//     //.join(" + ");
//     console.log(argumentGiven);
// }
  








    if(action === "my-tweets"){
        // node liri.js my-tweets
        // This will show your last 20 tweets and when they were created at in your terminal/bash window.
        console.log("Tweeter is Running ..." +"\n" + 
       '________________________________________________________________________________________________');
        getTweets();

    }else if(action ==="spotify-this-song"){

        console.log("Spotyfy is Running ..." + "\n" + 
        "________________________________________________________________________________________________");
                   /////////////I AM SO PROUD OF THIS 2 lines LOL ///////////
if(action === "spotify-this-song" && !argument){
    argument = "The Sign";
}
///////////////////KEEPING IT CLEAN AND TIDE ////////////
           getSongInfo();
           


        
     

    }else if(action === "movie-this"){
        //Call getMovie Func
        console.log("Movie is running ... \n"+
        "________________________________________________________________________________________________");
        if(action === "movie-this" && !argument){
            argument = "Mr. Nobody";
        }
        getMovie();

    }else if(!action){
        //Talk shit 
        console.log("What?? What do you want??Say something then or I dont know what to do");
    }else{
        //Call do something func
        console.log("do what it says");

    }
/////////////////////////START GET TWEETS FUNCTION////////////////////
///get Tweets function
function getTweets(){
    //should then be able to access your keys information like so
//I am sure it is not in a right place. I'll figure it out
    var client = new Twitter(keys.twitter);

    
    var params = {screen_name: '@benjizasion', count: 21, trim_user:true};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
      //FOR LOOP IN ORDER TO LOOPING THROUGH THE RESULTS
       for(var i = 0 ; i < tweets.length; i++ ){
        console.log(i+1 +""+
        "\n\n"+"Status: "+"\n"+tweets[i].text +"\n\n" + "Created at: \n" + tweets[i].created_at+ "\n" + 
        "\n------------------------------------------------------------------------------------------------" ); //TESTING
           
    }
      }
    });
    }
//////////////////////////END GET TWEETS FUNCTION///////////////////////////
    
////////////////START SPOTYFY FUNCTION///////////////
///Get song Function

   function getSongInfo(){


   var spotify = new Spotify(keys.spotify);
   
    
      spotify.search({ type:'track', query:argument, limit:10},
      function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        var songInfo = data.tracks.items;

       
       // Do something with 'data' 
       for(var i = 0; i < songInfo.length;i++ ){

         var songName = songInfo[i].name;
        var albumName = songInfo[i].album.name;
        var previewLink= songInfo[i].external_urls.spotify;
        var artistName= songInfo[i].artists[0].name;

        //Console logging the shits
        
       console.log(
           i+1 +""+
           "\n\n" + "Name of the Artist: " + artistName +"\n\n" + 
            "Name of the Album: " + albumName + "\n\n" +
             "Name of the Song: " + songName + "\n\n" +
             "Go to this link to listen: " + previewLink + "\n\n" +
       "------------------------------------------------------------------------------------------------");
       
       }
       

       //show
//        Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
//       console.log(data.tracks); 
      });
    }
////////////////END SPOTIFY FUNCTION///////////////



///get movie function
//Start get movie function////////////////////
//var omdbApiKey = "36d1a550";
//var queryUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=36d1a550";

function getMovie(){
    var omdbApi = require('omdb-client');
 
var params = {
    apiKey: '36d1a550',
    title: argument,   
}
omdbApi.get(params, function(err, data) {
    console.log("\n\n Your Result About the movie " +'"' + argument +'"'+
    " \n\n________________________________________________________________________________________________\n");
    if(!data){
       return console.log("\nMovie not Found");
    }
   // console.log(data);
    // process response...
    console.log(
    // * Title of the movie.
    "Title of the movie: "+data.Title  +"\n\n"+    
    // * Year the movie came out.
    "Year the movie came out: "+data.Year   +"\n\n"+    
    // * IMDB Rating of the movie.
    "IMDB Rating of the movie: "+data.imdbRating  +"\n\n"+
    // * Rotten Tomatoes Rating of the movie.
    //"Rotten Tomatoes Rating of the movie: "+data.Rating[2].Source +"\n\n"+
    // * Country where the movie was produced.
    "Country where the movie was produced: "+data.Country +"\n\n"+
    // * Language of the movie.
    "Language of the movie: "+data.Language +"\n\n"+
    // * Plot of the movie.
    "Plot of the movie: "+data.Plot +"\n\n"+
    // * Actors in the movie.
    "Actors in the movie: " +data.Actors +
    "\n\n________________________________________________________________________________________________");

   
});

}
//End get movie function////////////////////
///do what it says function




 

