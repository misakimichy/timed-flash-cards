export default class FlashCard {
  constructor (score = 0) {
    this.score = score;
    this.questions = {
      card1: {
        question: "The complement to the object.(?):pair is 'key'.",
        answer: 1
      },
      card2: {
        question: "The jQuery is a question.",
        answer: 2
      },
      card3: {
        question: "The flavor of JavaScript is chocolate.",
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

  // Show each question in every 10 seconds
  setDisplay() {
    const questionList = Object.values(this.questions).map(card => {
      return card.question;
    });
      // this.displayMessage();
    return questionList;
  }

  displayMessage() {
    let time = setTimeout(() => {
      alert("Timeout/lose point; Better luck next time!");
    }, 5000);
    // this.checkAnswer(answerVal);
    function myStopFunction() {
      clearTimeout(time);
    }
  }

  checkAnswer(answerVal, currentCard) {
    let userAnsArr = [];
    let currentAnswer = currentCard.answer;
    userAnsArr.push(answerVal);
    for (let i = 0; i < userAnsArr.length; i++){
      (userAnsArr[i] === currentAnswer) ? this.score++ :this.score--;
    }
      return this.score;
  }
}
