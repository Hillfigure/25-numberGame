// In deze versie toegevoegd:
// checks of er wel een waarde is en zo niet, een nieuw prompt.
// Beste zou zijn, check of het van het type int is.
// extra check ingebouwd om als er 1 kans over is, enkelvoud 'kans'te tonen.
// Dit is de extra versie dus. 
// Hieronder commented out de uitgekleedde versie (incl bonus)

const calculateRandomNumber = function(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function myFunction() {
    let minValue;
    let maxValue;
    let chosenNumber;
    let guessCounter = 5;

    let name = prompt("Welkom! Wat is je naam?");
    if (!name) {
        name = prompt("Ik ontving geen waarde. Type je naam nogmaals in");
    }
    minValue = prompt("Wat is het laagste getal?");
    maxValue = prompt("Wat is het hoogste getal");
    let randomNumber = calculateRandomNumber(minValue, maxValue);
    alert(randomNumber);
    while (guessCounter !== 0) {
        chosenNumber = prompt("Voer een nummer in van " + minValue + " tot " + maxValue + " om te beginnen met raden...");
        guessCounter--;
        if (!chosenNumber) {
            chosenNumber = prompt("Ik ontving geen waarde. Voer een nummer in van " + minValue + " tot " + maxValue + " om te beginnen met raden...");
        } else if (chosenNumber == randomNumber){
            alert("Gefeliciteerd je hebt gewonnen");   
            break;
        } else if (chosenNumber != randomNumber) {
            if (guessCounter === 0) {
                alert("Je kansen zijn op, je hebt verloren");
                break;
            } else if (guessCounter === 1) {
                alert("Dat is niet correct. Je hebt nog " + guessCounter + " kans over");
            } else {
                alert("Dat is niet correct. Je hebt nog " + guessCounter + " kansen over");
            }
        }
    }
    alert("Dag " + name + ". Tot de volgende keer")
}

// const calculateRandomNumber = function(min, max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
  
//   function myFunction() {
//       let minValue;
//       let maxValue;
//       let chosenNumber;
//       let guessCounter = 5;
  
//       let name = prompt("Welkom! Wat is je naam?");
//       if (name != null) {
//       alert("Hey " + name);
//       }
//       minValue = prompt("Wat is het laagste getal?");
//       maxValue = prompt("Wat is het hoogste getal");
//       let randomNumber = calculateRandomNumber(minValue, maxValue);
//       alert(randomNumber);
//       while (guessCounter !== 0) {
//           chosenNumber = prompt("Voer een nummer in van " + minValue + " tot " + maxValue + " om te beginnen met raden...");
//           guessCounter--;
//           if (chosenNumber == randomNumber){
//               alert("Gefeliciteerd je hebt gewonnen");   
//               break;
//           } else if (chosenNumber != randomNumber) {
//               if (guessCounter === 0) {
//                   alert("Je kansen zijn op, je hebt verloren");
//                   break;
//               } else {
//                   alert("Dat was niet goed. Je hebt nog " + guessCounter + " kansen over");
//               }
//           }
//       }
//       alert("Dag " + name + ". Tot de volgende keer")
//   }