// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // It will do this by sending out the value "true" have a table
    // Pushing req.body since it's a json we're dealing with
    var newUserData = req.body;
    var newUserScores = newUserData.scores;
    var difference = [];
    console.log(req.body);


    for (var i = 0; i < friendsData.length; i++) {
      difference[i] = 0;
      difference[i] += Math.abs(friendsData[i].scores[0]-newUserScores[0]);
      difference[i] += Math.abs(friendsData[i].scores[1]-newUserScores[1]);
      difference[i] += Math.abs(friendsData[i].scores[2]-newUserScores[2]);
      difference[i] += Math.abs(friendsData[i].scores[3]-newUserScores[3]);
      difference[i] += Math.abs(friendsData[i].scores[4]-newUserScores[4]);
      difference[i] += Math.abs(friendsData[i].scores[5]-newUserScores[5]);
      difference[i] += Math.abs(friendsData[i].scores[6]-newUserScores[6]);
      difference[i] += Math.abs(friendsData[i].scores[7]-newUserScores[7]);
      difference[i] += Math.abs(friendsData[i].scores[8]-newUserScores[8]);
      difference[i] += Math.abs(friendsData[i].scores[9]-newUserScores[9]);
      console.log(difference);
      };

  for (var i = 0; i < 100; i ++) {
    
    if (i === difference[0]) {
      console.log(friendsData[0].name);
      break;
    }
    if (i === difference[1]) {
      console.log(friendsData[1].name);
      break;
    }
    if (i === difference[2]) {
      console.log(friendsData[2].name);
      break;
    }
    if (i === difference[3]) {
      console.log(friendsData[3].name);
      break;
    }
    if (i === difference[4]) {
      console.log(friendsData[4].name);
      break;
    }
    if (i === difference[5]) {
      console.log(friendsData[5].name);
      break;
    }
    if (i === difference[6]) {
      console.log(friendsData[6].name);
      break;
    }
    if (i === difference[7]) {
      console.log(friendsData[7].name);
      break;
    }
  }

  });
   

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendsData = [];
    console.log(friendsData);
  });
};
