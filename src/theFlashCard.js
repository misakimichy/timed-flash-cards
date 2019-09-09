export default class FlashCard {
  constructor (score) {
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
      console.log(card.question);
      return card.question;
    });
    return questionList;
    // this.displayMessage();
  }

  displayMessage() {
    let time = setTimeout(() => {
      alert("Timeout/lose point; Better luck next time!");
    }, 5000);
    //this.checkAnswer(answerVal);
    function myStopFunction() {
      clearTimeout(time);
    }
  }

  checkAnswer(answerVal){
    let userAnsArr = [];
    let ansArr = Object.values(this.questions).map(card => {
      return card.answer;
    });
    let count = this.score;
    userAnsArr.push(answerVal);

    for (let i =0; i < userAnsArr.length; i++){
      (ansArr.includes(userAnsArr[i]))?
          count++ : count--;
    }
      return count;
  }

}
