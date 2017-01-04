//databse set up
  var config = {
    apiKey: "AIzaSyDr1oAF7CJ974_a1BO4g_hQM0ApE_SEJV4",
    authDomain: "my-first-project-bed47.firebaseapp.com",
    databaseURL: "https://my-first-project-bed47.firebaseio.com",
    storageBucket: "my-first-project-bed47.appspot.com",
  };
//initialize database
  firebase.initializeApp(config);
  var database = firebase.database();

// put data nto DB using an onclick function which after the click grabs the user input, stores them into variables and creates an object which will then push to the database
  $("#addTrain").on("click", function(){
  		var trainName = $("#trainName").val().trim(); //grab user input value, get rid of white space, store into a variable
  		var destination = $("#destination").val().trim();//grab user input value, get rid of white space, store into a variable
  		var firstTrainUnix = moment($("#firstTrain").val().trim(), "HH:mm").subtract(10, "years").format("X");//get user input, format into militarty time using moment, store into a variable
  		var frequency = $("#frequency").val().trim(); //grab user input value, get rid of white space, store into a variable

  		//create an object which we will then push to the DB.The object keys will have the value of the variables previously created, remeber that the values in those variables were gotten from the user input
  		var newTrain = {
  			name : trainName, //object key equals vaiable which contains input user entered
  			goingTo : destination,//object key equals vaiable which contains input user entered
  			time : firstTrainUnix,//object key equals vaiable which contains input user entered
  			howOften : frequency//object key equals vaiable which contains input user entered
  		};

  		database.ref().push(newTrain); //push object to the database (ref references the database)

  		return false; 

  });

//this function pulls the object that was just pushed to the database down so we can maniulate the time using moment, perfrom the calculations and print to the page
// database.ref().on("child_added", function(childSnapshot, prevChildKey){
// console.log(childSnapshot.val());

//Note to Dwight: I couldnt finish, not enough time, here is some pseduo code for you reading pleasure tho lol.
//You are probaly going to say oh yeah...well here is an F for YOUR reading pleasure Nick.


//this function grabs a "snapshot" of the "child" (child was created after the onclick)
//the "child" is basically an object that was created by the onclick and pushed to the database
//we then get a snapshot of that "child" (or object), grab the values in the object and format them accordingly using moment where applicable 
//after the formatting is done we have to now store these "new values" into  new variables along with the unchanged ones too
//now that we have our new variables with the correctly formatted time we can perform our calculations (where applicable) 
//Then (using jQuery) 1.grab the values in the newly created variables 2.dynamically create HTML table/rows and then 3.append those values to the table/rows that were just created 
//The values will now be displayed in the HTML for the user to see

// };







