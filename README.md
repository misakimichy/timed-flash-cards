# Timed Flash Cards

#### _Intermediate JavaScript - Asynchorny and APIs: Timed Flash Cards, 9/9/2019_

## Description
Build a Timed Flash Cards using TDD

Create a timed flash card application that utilizes `setTimeout()` and `setInterval()`.


## Website should have:
- Users should have a set amount of time to answer questions about JavaScript. 
- They should be able to accrue (and lose) points based on how many questions they get correct or incorrect.


### Specs
| description | input | output |
| :-- | :-- | :-- |
| Flash card questions will appear to user one question at a time |  N/A  | N/A |
| Capture a chosen value for user answer | T | T |
| If user does not select an answer, display message "Please select an answer" | N/A | "Please select an answer" |
| If user chooses a correct answer, increment points | correct answer | (+1)|
| If user chooses a incorrect answer, decrement points | incorrect answer | (-1)|
| If user does not select an answer, display message "About to timeout/lose point! Select quickly" | N/A | "About to timeout/lose point! Select quickly"|
| Question will timeout within a given time frame and user will automatically have points deducted | T | (-1)|
| Display user score when flash card questions finish |  N/A | "Final Score: 10!" |


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
