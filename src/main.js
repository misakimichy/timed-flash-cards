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
      $("form#card").prepend(`<h2>${questions[questionIndex]}</h2>`);
      return ;
    } else {
      alert("No more cards!");
      $("#card").empty();
    }
  };
  showQuestion();
  $("form").submit(function(event){
    event.preventDefault();
    clearInput();
    
    let answerVal = parseInt($("input[name=card]:checked").val());
    console.log(newCard.checkAnswer(answerVal, showCard()));
    
    questionIndex++;
    cardIndex++;
    showQuestion();
  });
});
