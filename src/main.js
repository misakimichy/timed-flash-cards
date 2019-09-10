import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import FlashCard from "./theFlashCard.js";

// ToDo: Add onclick function for form
const clearInput = () => {
  $("input[name=card]:checked").prop("checked", false);
  $("form#card").find('h2:first-child').remove();
};

$(document).ready(function() {
  
  const newCard = new FlashCard();
  let questionIndex = 0;
  const showQuestion = () => {
    const questions = newCard.setDisplay();
    if (questionIndex < questions.length){
      return questions[questionIndex];
    } else {
      alert("No more cards!");
    }
  };

  $("form").submit(function(event){
    event.preventDefault();
    clearInput();
    $("form#card").prepend(`<h2>${showQuestion()}</h2>`);
    // newCard.displayMessage();
    let answerVal = parseInt($("input[name=card]:checked").val());
    let currentCard = newCard.questions.card1;
    
    questionIndex++;
  });
});
