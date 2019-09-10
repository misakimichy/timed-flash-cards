import FlashCard from '../src/theFlashCard.js';

// - Spec:  Flash card questions will appear to user one question at a time.
// Input: N/A  
// Output: N/A
describe('Testing the display of the question', function() {
  const newCard = new FlashCard(0);
  it('should return a question', function() {
    expect(newCard.setDisplay()[0]).toEqual("The complement to the object.(?):pair is 'key'.");
  });
// - Spec: Capture a chosen value for user answer. 
// Input: T
// Output: T
  it('should return the score', function() {
    let userAnsArr = [1, 2, 2];
    expect(newCard.checkAnswer(userAnsArr)).toEqual(3);
  });

// - Spec: If user does not select an answer, display message "Please select an answer". 
// Input: N/A
// Output: "Please select an answer"
// spec fulfilled by <input 'required' />

// - Spec: If user chooses a correct answer, increment points.
// Input: T (correct answer)
// Output: (+1)

// - Spec: If user chooses a incorrect answer, decrement points.
// Input: T (incorrect answer)
// Output: (-1)

// - Spec: If user does not select an answer, display message "About to timeout/lose point! Select quickly". 
// Input: N/A
// Output: "About to timeout/lose point! Select quickly"

// - Spec: Question will timeout within a given time frame and user will automatically have points deducted.
// Input: N/A
// Output: (-1)

// - Spec:  Display user score when last flash card question has been answered.
// Input: User selects final answer. 
// Output: "Final Score: 10!"
});

