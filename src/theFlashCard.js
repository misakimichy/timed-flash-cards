export default class FlashCard { 
  constructor (score) {
    this.score = score; 
    this.questions = {
      card1: {
        question: "What is the complement to the object.(?):pair?",
        answer: 1
      },
      card2: {
        question: "What is jQuery?",
        answer: 2
      },
      card3: {
        question: "What flavor is JavaScript?",
        answer: 2
      }
    };
  }

  // init () {
  //   this.setDisplay();
  //   this.setTimer();
  //   this.checkAnswer();
  //   this.render();
  // }

  setDisplay() {

    return this.questions;

    // const intervalId = setInterval(Object.values(questions).map(question => {
    //   console.log(question, this.score);
    // }, 1000));
    // return intervalId;
  }
}