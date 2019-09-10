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
  let cardIndex = 0;
  const showCard = () => {
    const cards = Object.keys(newCard.questions).map(card => {
      return card;
    });
    if(cardIndex < cards.length) {
      return cards[cardIndex];
    } else {
      return false;
    }
  };

  let questionIndex = 0;
  const showQuestion = () => {
    const questions = newCard.setDisplay();
    if (questionIndex < questions.length){
      return questions[questionIndex];
    } else {
      alert("No more cards!");
    }
  };
  $("form#card").prepend(`<h2>${showQuestion()}</h2>`);
  $("form").submit(function(event){
    event.preventDefault();
    clearInput();
    
    let answerVal = parseInt($("input[name=card]:checked").val());
    console.log(newCard.checkAnswer(answerVal, showCard()));
    
    questionIndex++;
    cardIndex++;
    $("form#card").prepend(`<h2>${showQuestion()}</h2>`);
  });
});
