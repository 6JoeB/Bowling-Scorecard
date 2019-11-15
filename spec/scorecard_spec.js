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

        it('starts at frame 1', function () {
            expect(scorecard.currentFrame).toEqual(1);
        });

        it('starts with no preceeding spare', function () {
            expect(scorecard.spare).toBeFalsy();
        });

        it('starts with no preceeding strike', function () {
            expect(scorecard.strike).toBeFalsy();
        });
    });

    describe('checking the frame has the correct scores added', function () {

        it('all shots are added to the frame for a no spare or strike game', function () {
            var i;
            for (i = 0; i < 10; i++) {
                scorecard.addScore(8, 1);
            }
            expect(scorecard.frameArray[1]).toEqual(8);
            expect(scorecard.frameArray[2]).toEqual(1);
            expect(scorecard.frameArray[3]).toEqual(8);
            expect(scorecard.frameArray[4]).toEqual(1);
            expect(scorecard.frameArray[5]).toEqual(8);
            expect(scorecard.frameArray[6]).toEqual(1);
            expect(scorecard.frameArray[7]).toEqual(8);
            expect(scorecard.frameArray[8]).toEqual(1);
            expect(scorecard.frameArray[9]).toEqual(8);
            expect(scorecard.frameArray[10]).toEqual(1);
        })
    });

    describe('adding scores to total score', function () {

        // it('can tell if the score entered is greater than 10', function () {
        //     expect(scorecard.addScore(10, 2)).toEqual("Your score is too high, please try enter again")
        // });

        it('can correctly add up to the tenth score for 8, 1', function () {
            var i;
            for (i = 0; i < 10; i++) {
                scorecard.addScore(8, 1);
            }
            scorecard.finalShot();
            expect(scorecard.totalScore).toEqual(90);
        });

        it('can correctly add up to the tenth score for 9, 1', function () {
            var i;
            for (i = 0; i < 10; i++) {
                scorecard.addScore(9, 1);
            }
            scorecard.finalShot(9);
            expect(scorecard.totalScore).toEqual(181);
        });

        it('can correctly add up to the tenth score for 10, /', function () {
            var i;
            for (i = 0; i < 10; i++) {
                scorecard.addScore(10, 0);
            }
            scorecard.finalShot(10);
            expect(scorecard.totalScore).toEqual(300);
        });
    });
});