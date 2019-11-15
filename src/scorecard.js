'use strict';

class Scorecard {
    constructor() {
        this.totalScore = 0;
        this.currentFrameScore = 0;
        this.currentFrame = 1;
        this.spare = false;
        this.strike = false;
        this.secondStrike = false;
        this.frameArray = ["placeholder"];
        this.finalMessage = "";
        this.errorMessage = ["Your score is too high, please try enter again", "You are on frame 10 please take your final shot"];
    }
    addScore(firstShot, secondShot) {
        this.currentFrameScore = (firstShot + secondShot); // adding the shot scores together to equal total frame score
        // if (this.currentFrameScore > 10) {
        //     return this.errorMessage[0];
        // } else if (this.currentFrame = 10) {
        //     return this.errorMessage[1];
        // } else {
        this.addScoreToFrame(firstShot, secondShot);
        this.checkForPreviousStrikeOrSpare(firstShot, secondShot);
        this.totalScore += this.currentFrameScore; //adds the score from this frame to the total
        this.checkCurrentShotForStrikeOrSpare(firstShot);
    }
    addScoreToFrame(firstShot, secondShot) {
        this.frameArray.push(firstShot);
        this.frameArray.push(secondShot); //adding the first and second bowls to the frame array
        this.currentFrame += 1; //advancing the current frame value
    }
    checkForPreviousStrikeOrSpare(firstShot, secondShot) {
        if (this.strike === true) {
            this.totalScore += this.currentFrameScore;
            this.frameArray.push();
        }
        else if (this.spare === true) {
            this.totalScore += firstShot;
        } //adding the additional scores from strikes or spares
    }
    checkCurrentShotForStrikeOrSpare(firstShot) {
        if (firstShot === 10) {
            this.strike = true; //checking if the score was a strike
        }
        else if (this.currentFrameScore === 10) {
            this.spare = true; //checking if the score was a spare
        }
        else {
            this.spare = false;
            this.strike = false; //resetting the spare and strike values to false
        }
    }
    checkFrameNum(extraShot) {
    }
    finalShot(extraShot) {
        if (this.currentFrame === 10 && this.currentFrameScore === 10) {
            this.totalScore += extraShot;
            this.finalMessage = "game over your final score is ${this.totalScore}";
        }
        else if (this.currentFrame === 10 && this.currentFrameScore !== 10) {
            this.finalMessage = "game over your final score is ${this.totalScore}";
        }
    }
    reset() {
        this.totalScore = 0;
        this.currentFrameScore = 0;
        this.currentFrame = 1;
        this.spare = false;
        this.strike = false;
        this.secondStrike = false;
        this.frameArray = ["placeholder"];
    }
}
;








