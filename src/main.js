import $ from "jquery";
import FlashCard from "./theFlashCard.js";

$(document).ready(function() {
    const newCard = new FlashCard(0);
    console.log("setDisplay method: ", newCard.setDisplay());
    console.log("Card1: ", newCard.questions.card1);
    console.log("Card1 question: ", newCard.questions.card1.question);
});
