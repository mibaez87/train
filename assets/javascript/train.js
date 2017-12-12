var config = {
    apiKey: "AIzaSyDwi5SYNN01LGc076-dZM7jqXGenwia0HU",
    authDomain: "my-awesome-project-eff92.firebaseapp.com",
    databaseURL: "https://my-awesome-project-eff92.firebaseio.com",
    projectId: "my-awesome-project-eff92",
    storageBucket: "my-awesome-project-eff92.appspot.com",
    messagingSenderId: "657189126207"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$("#add-train").on("click", function(event){
    event.preventDefault();

    var trainN = $("#train-name-input").val().trim();
    var trainD = $("#train-dest-input").val().trim();
    var trainT = $("#train-time-input").val().trim();
    var trainF = $("#train-freq-input").val().trim();

    var newTrain = {
        name: trainN,
        destination: trainD,
        time: trainT,
        frequency: trainF
    };

    database.ref().push(newTrain);

    console.log("Name: " + newTrain.name);
    console.log("Destination: " + newTrain.destination);
    console.log("First Train: " + newTrain.time);
    console.log("Frequency: " + newTrain.frequency);

    $("#train-name-input").val("");
    $("#train-dest-input").val("");
    $("#train-time-input").val("");
    $("#train-freq-input").val("");
});

database.ref().on("child_added", function(childSnapshot, prevChildKey){
    console.log("Child: " + childSnapshot.val());

    var trainN = childSnapshot.val().name;
    var trainD = childSnapshot.val().destination;
    var trainT = childSnapshot.val().time;
    var trainF = childSnapshot.val().frequency;

    console.log("TName: " + trainN);
    console.log("TDestination: " + trainD);
    console.log("TFirst Train: " + trainT);
    console.log("TFrequency: " + trainF);

});
