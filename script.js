//const { myFetch, pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");
/*^^^ commenting out the above line allowed me to edit the code somewhat, but then my functions would not return values properly, and then suddenly it broke again and I haven't been able to replicate it */
const { validateInput } = require("./scriptHelper");


window.addEventListener("load", function () {   
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoLevel]");
    let faultyItems = document.getElementById("faultyItems");
    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        if (validateInput(pilot)==="Empty"||validateInput(copilot)==="Empty"||validateInput(fuelLevel)==="Empty"||validateInput(cargoLevel) === "Empty"){
            alert("All fields are required!");
            event.preventDefault();
        } else if (validateInput(pilot)==="Is a Number"||validateInput(copilot)==="Is a Number"){
            alert("Make sure to enter valid information for each field!");
            event.preventDefault();
        } else if (validateInput(fuelLevel)==="Not a Number"||validateInput(cargoLevel)==="Not a Number"){
            alert("Make sure to enter valid information for each field!");
            event.preventDefault();
        } else {
            formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoLevel);
        }
        
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