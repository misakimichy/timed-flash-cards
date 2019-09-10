import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import FlashCard from "./theFlashCard.js";

$(document).ready(function() {
  const newCard = new FlashCard(0);
  $("form#card").prepend(`<h2>${newCard.setDisplay()[0]}</h2>`);

  $("form").submit(function(event){
    event.preventDefault();
    // newCard.displayMessage();
    let answerVal = parseInt($("input[name=card]:checked").val());
    let currentCard = newCard.questions.card1;
    console.log(newCard.checkAnswer(answerVal, currentCard));
  });
});
