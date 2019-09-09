import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import FlashCard from "./theFlashCard.js";

$(document).ready(function() {
  const newCard = new FlashCard(0);
  console.log("Show me the return", newCard.setDisplay());
  $("form#card").prepend(`<h2>${newCard.setDisplay()[0]}</h2>`);

  $("form").submit(function(event){
    event.preventDefault();
    newCard.displayMessage();
    let answerVal = document.getElementsByName("card").value;
    newCard.checkAnswer(answerVal);
  });
});
