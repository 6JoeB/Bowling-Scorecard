'use strict';

var scorecard;

beforeEach(function () {
    scorecard = new Scorecard;
});

describe('Bowling scorecard', function () {

    describe('scorecard setup', function () {

        it('creates an instance of the scorecard', function () {
            expect(scorecard).toBeInstanceOf(Scorecard);
        });

        it('starts with a score of 0', function () {
            expect(scorecard.score).toEqual(0);
        });
    });

    describe('adding scores', function () {

        it('can add the first score to the scorecard', function () {
            scorecard.addScore(5, 5);
            expect(scorecard.score).toEqual(10);
        });
    });
});