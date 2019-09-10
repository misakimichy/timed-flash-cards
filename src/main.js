import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import FlashCard from "./theFlashCard.js";

const clearInput = () => {
  $("input[name=card]:checked").prop("checked", false);
};

$(document).ready(function() {
  
  const newCard = new FlashCard();
  let questionIndex = 0;
  let userAnsArr = [];
  const showQuestion = () => {
    const questions = newCard.setDisplay();
    if (questionIndex < questions.length){
      $("#question").text(`${questions[questionIndex]}`);
      return ;
    } else {
      alert("No more cards!");
      $("#card").hide();
      $("#score").text(newCard.checkAnswer(userAnsArr));
      $("#result").show();
    }
  };
  showQuestion();

  $("form").submit(function(event){
    event.preventDefault();
    let answerVal = parseInt($("input[name=card]:checked").val());
    userAnsArr.push(answerVal);
    questionIndex++;
    showQuestion();
    clearInput();
  });
});
