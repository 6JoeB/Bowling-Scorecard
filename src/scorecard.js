'use strict';

function Scorecard() {
    this.totalScore = 0;
    this.currentFrameScore = 0;
    this.currentFrame = 1;
    this.spare = false;
    this.strike = false;
    this.frameArray = ["placeholder"];
};

Scorecard.prototype.addScore = function (firstShot, secondShot) {

    this.frameArray.push(firstShot)
    this.frameArray.push(secondShot) //adding the first and second bowls to the frame array
    this.currentFrame += 1 //advancing the current frame value

    this.currentFrameScore = (firstShot + secondShot) // adding the shot scores together to equal total frame score

    if (this.strike === true) {
        this.totalScore += this.currentFrameScore
    } else if (this.spare === true) {
        this.totalScore += firstShot
    } //adding the additional scores from strikes or spares

    this.totalScore += this.currentFrameScore //adds the score from this frame to the total

    if (firstShot === 10) {
        this.strike = true; //checking if the score was a strike
    } else if (this.currentFrameScore === 10) {
        this.spare = true; //checking if the score was a spare
    } else {
        this.spare = false;
        this.strike = false; //resetting the spare and strike values to false
    }
};

Scorecard.prototype.reset = function () {
    this.totalScore = 0;
    this.currentFrameScore = 0;
    this.currentFrame = 1;
    this.spare = false;
    this.strike = false;
    this.frameArray = ["placeholder"];
};
