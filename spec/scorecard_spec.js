'use strict';

var scorecard;

describe('Bowling scorecard', function () {

    beforeEach(function () {
        scorecard = new Scorecard;
        scorecard.reset;
    });

    describe('scorecard setup', function () {

        it('creates an instance of the scorecard', function () {
            expect(scorecard).toBeInstanceOf(Scorecard);
        });

        it('starts with a score of 0', function () {
            expect(scorecard.totalScore).toEqual(0);
        });
    });

    describe('checking the frame has the correct scores added', function () {

        it('the first 2 shots are added to the frame', function () {
            scorecard.addScore(8, 1);
            expect(scorecard.frameArray[1]).toEqual(8);
            expect(scorecard.frameArray[2]).toEqual(1);
        })

        it('the second 2 shots are added to the frame', function () {
            scorecard.addScore(8, 1);
            scorecard.addScore(8, 1);
            expect(scorecard.frameArray[3]).toEqual(8);
            expect(scorecard.frameArray[4]).toEqual(1);
        })
    });

    describe('adding scores to total score', function () {

        it('can add the first score to the scorecard', function () {
            scorecard.addScore(8, 1);
            expect(scorecard.totalScore).toEqual(9);
        });
    });
});