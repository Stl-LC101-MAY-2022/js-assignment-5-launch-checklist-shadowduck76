require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const div = document.getElementById("missionTarget")
        div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
        `
}

function validateInput(testInput) {
   if(isNaN(testInput)) {
    return "Not a Number";
   } else if (!isNaN(testInput)) {
    return "Is a Number";
   } else {
    return "Empty";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
        const pilotStatus = document.getElementById("pilotStatus");
        const copilotStatus = document.getElementById("copilotStatus");
        const fuelStatus = document.getElementById("fuelStatus");
        const cargoStatus = document.getElementById("cargoStatus");
        const launchStatus = document.getElementById("launchStatus");
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        if (fuelLevel<10000) {
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Insufficient fuel for projected journey!!" 
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = red;
        }
        if (cargoLevel > 10000) {
            list.style.visibility = "visible";
            cargoStatus.innerHTML = "Too much mass for takeoff!!"
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = red;
        }
        if (fuelLevel >= 10000 && cargoLevel <= 10000) {
            launchStatus.style.color = green;
            launchStatus.innerHTML = "Shuttle is ready for launch.";
        }
    
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
