# Timed Flash Cards

#### _Intermediate JavaScript - Asynchorny and APIs: Timed Flash Cards, 9/9/2019_

## Description
Build a Timed Flash Cards using TDD

Create a timed flash card application that utilizes `setTimeout()` and `setInterval()`.


## Website should have:
- Users should have a set amount of time to answer questions about JavaScript. 
- They should be able to accrue (and lose) points based on how many questions they get correct or incorrect.


### Specs
- Spec:  Flash card questions will appear to user one question at a time.
Input: N/A  
Output: N/A

- Spec: Capture a chosen value for user answer. 
Input: T
Output: T

- Spec: If user does not select an answer, display message "Please select an answer". 
Input: N/A
Output: "Please select an answer"

- Spec: If user chooses a correct answer, increment points.
Input: T (correct answer)
Output: (+1)

- Spec: If user chooses a incorrect answer, decrement points.
Input: T (incorrect answer)
Output: (-1)

- Spec: If user does not select an answer, display message "About to timeout/lose point! Select quickly". 
Input: N/A
Output: "About to timeout/lose point! Select quickly"

- Spec: Question will timeout within a given time frame and user will automatically have points deducted.
Input: N/A
Output: (-1)

- Spec:  Display user score when flash card questions finish.
Input: T  
Output: "Final Score: 10!"


## Setup/Installation Requirements

* Clone this repo.
* Navigate to the top level of the cloned directory.
* Then, open your preferred web browser.

## Known Bugs
* There are no know bugs at this time.

## Support and contact details
 misaki.koonce@gmail.com

## Technologies Used
_Git, GitHub, HTML, CSS, Bootstrap, jQuery, JavaScript, Webpack, Node.js, Jasmine and Karma


## License
Copyright © 2019 under the MIT License