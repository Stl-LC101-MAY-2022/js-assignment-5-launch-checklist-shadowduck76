const { myFetch, pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
    const pilot = document.querySelector("input[name=pilotName]");
    const copilot = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoLevel = document.querySelector("input[name=cargoLevel]");
    const faultyItems = document.getElementById("faultyItems");
    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        if ((validateInput(pilot)||validateInput(copilot)||validateInput(fuelLevel)||validateInput(cargoLevel)) === "Empty"){
            alert("All fields are required!");
         
        } else if ((validateInput(pilot)||validateInput(copilot))==="Is a Number"){
            alert("Make sure to enter valid information for each field!");
            
        } else if ((validateInput(fuelLevel)||validateInput(cargoLevel))==="Not a Number"){
            alert("Make sure to enter valid information for each field!");
        } 
       formSubmission(this.document, faultyItems, pilot, copilot, fuelLevel, cargoLevel);
        event.preventDefault();
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo(this.document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    })
   
});