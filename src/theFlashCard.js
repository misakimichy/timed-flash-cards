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

  // Show each question in every 10 seconds
  setDisplay() {
    const getCard = () => {
      Object.values(this.questions).map(card => {
        // console.log("card: ", card);
        // console.log("Card's question: ", card.question);
        // setTimeout(() => {alert(card.question)}, 10000);
      })
    };
    console.log(getCard());
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
