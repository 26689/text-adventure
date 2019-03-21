const divLocation = document.getElementById('location');
const myPossibilities = document.getElementById('possibilities');
const myInput = document.getElementById('myInput');
const feedback = document.getElementById('feedback');
const imageLocation = document.getElementById('imageLocation');
const myDescription = document.getElementById('description');
const myInventory = document.getElementById('inventory');
const myActions = document.getElementById('actions')

let currentLocation = 4;
let items = [];
let inventoryslots = [];
myInventory.innerHTML = "Je inventory heeft :  "
let itemspickup = [];
itemspickup[0] = " Je ziet een sleutel liggen";
itemspickup[1] = "Gebruik je sleutel";
items[0] = "sleutel";


let locations = [];
locations[0] = "Gang";
locations[1] = "Trap";
locations[2] = "Uitgang";
locations[3] = "Meeting kamer";
locations[4] = "Startgang";
locations[5] = "Studiehal";
locations[6] = "Poo kamer";
locations[7] = "Merlin's kamer";
locations[8] = "Martelkamer";

images = [];
images[0] = "kamer0.jpg";
images[1] = "kamer1.jpg";
images[2] = "kamer2.jpg";
images[3] = "kamer3.jpg";
images[4] = "kamer4.jpg";
images[5] = "kamer5.jpg";
images[6] = "kamer6.jpg";
images[7] = "kamer7.jpg";
images[8] = "kamer8.jpg";

directions = [];
directions[0] = ["oost"];
directions[1] = ["west", "zuid"];
directions[2] = ["zuid"];
directions[3] = ["oost"];
directions[4] = ["noord", "west", "zuid"];
directions[5] = ["noord", "zuid"];
directions[6] = ["oost"];
directions[7] = ["noord", "west", "oost"];
directions[8] = ["noord", "west"];

descriptions = [];
function changeDescription(){
descriptions[0] = "U staat in een gang.";
descriptions[1] = "Een trap!";
descriptions[2] = "De uitgang";
descriptions[3] = "Wat een mooie kamer.";
descriptions[4] = "Je begint hier";
descriptions[5] = "Van deze kamer krijg je de kriebels";
descriptions[6] = "Even pauze... "+ itemspickup[0];
descriptions[7] = "Maar waar is Merlin nou?";
descriptions[8] = "Hier moet je zo snel mogelijk weg";


actions = [];
actions[0] = ["Hier is niks te vinden. Zoek verder"];
actions[1] = ["Hier is niks te vinden. Zoek verder"];
actions[2] = ["je kan hier niks. Zoek eerst de sleutel"];
actions[3] = ["Hier is niks te vinden. Zoek verder"];
actions[4] = ["Hier is niks te vinden. Zoek verder"];
actions[5] = ["Hier is niks te vinden. Zoek verder"];
actions[6] = ["Pak de sleutel"];
actions[7] = ["Hier is niks te vinden. Zoek verder"];
actions[8] = ["Hier is niks te vinden. Zoek verder"];

}


changeDescription();
myInput.addEventListener('keydown', getInput, false);

function getInput(evt) {
  if (evt.key == "Enter") {
    let inputArray = myInput.value.split(" ");

    if (inputArray[0] == "ga") {
      if (directions[currentLocation].indexOf(inputArray[1]) != -1) {
        switch (inputArray[1]) {
          case "noord":
            currentLocation -= 3;
            break;
          case "zuid":
            currentLocation += 3;
            break;
          case "oost":
            currentLocation += 1;
            break;
          case "west":
            currentLocation -= 1;
            break;
        }
      } else {
        feedback.innerHTML = "dat mag niet";
        setTimeout(removeFeedback, 2000);

      }
      giveLocation();
      myInput.value = "";
    }
    if (inputArray[0] == "pak") {
      for (var i = 0; i < items.length; i++) {

      if(inputArray[1] == items[i])
      {
        for (var i = 0; i < items.length; i++) {
          if(descriptions[currentLocation].includes(items[i]))
          {
            myInput.value = "";
            itemspickup[0] = "";
            changeDescription();
            descriptions[currentLocation].innerHTML = description[currentLocation] - itemspickup[0];
            myInventory.innerHTML = myInventory.innerHTML + items[i] + "";
            actions[2] = itemspickup[1];
            giveLocation();
          }
      }
    }
  }
}
if (inputArray[0] == "gebruik") {
  for (var i = 0; i < items.length; i++) {
      if(inputArray[1] == items[i])
      {
    for (var i = 0; i < items.length; i++) {
      if(actions[currentLocation].includes(items[i]))
      {
        myInput.value = "";
        itemspickup[0] = "";
        descriptions[currentLocation].innerHTML = description[currentLocation] - itemspickup[0];
        myInventory.innerHTML = "  JE BENT VRIJ";
        giveLocation();
      }
  }
}
}
}

    if (inputArray[0] != "ga" && inputArray[0] != "pak" && inputArray[0] != "gebruik" ){
      feedback.innerHTML = "mogelijke commando's zijn: ga, pak, gebruik en help";
      myInput.value = "";
      setTimeout(removeFeedback, 4000);
    }

  }
}

function giveLocation() {
  divLocation.innerHTML = locations[currentLocation];
  myDescription.innerHTML = descriptions[currentLocation];
  imageLocation.src = "media/" + images[currentLocation];
  myDirections = "mogelijke richtingen zijn: ";
  for (let i = 0; i < directions[currentLocation].length; i++) {
    myDirections += "<li>" + directions[currentLocation][i] + "</li>";
  }
  myPossibilities.innerHTML = myDirections;
  myActions.innerHTML = "mogelijke acties zijn: " + "<li>" + actions[currentLocation] + "</li>";
  myInventory.innerHTML = myInventory.innerHTML;
}

function removeFeedback() {
  feedback.innerHTML = "";
}

giveLocation();
