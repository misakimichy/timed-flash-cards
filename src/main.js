import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import FlashCard from "./theFlashCard.js";

// ToDo: Add onclick function for form

$(document).ready(function() {
  
  const newCard = new FlashCard(0);
  let cardIndex = 0;
  const showCard = () => {
    const questions = newCard.setDisplay();
    console.log(questions);
    if (cardIndex < questions.length){
      return questions[cardIndex];
    } else {
      alert("No more cards");
    }
  }

  $("form").submit(function(event){
    event.preventDefault();
    // newCard.displayMessage();
    let answerVal = parseInt($("input[name=card]:checked").val());
    let currentCard = newCard.questions.card1;
    console.log(newCard.checkAnswer(answerVal, currentCard));
    $("form#card").prepend(`<h2>${showCard()}</h2>`);
    cardIndex++;
  });
});
