import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import FlashCard from "./theFlashCard.js";

$(document).ready(function() {
  const newCard = new FlashCard(0);
  console.log(newCard.setDisplay());

  $("form").submit(function(event){
    event.preventDefault();
    let answerVal = document.getElementsByName("card").value;
    newCard.checkAnswer(answerVal);
  });
});
