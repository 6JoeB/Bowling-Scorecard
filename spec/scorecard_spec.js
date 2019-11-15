'use strict';

var scorecard;

beforeEach(function () {
    scorecard = new Scorecard;
});

describe("Bowling scorecard", function () {

    describe('scorecard setup', function () {

        it('creates an instance of the scorecard', function () {
            expect(scorecard).toBeInstanceOf(Scorecard);
        });

        it('starts with a score of 0', function () {
            expect(scorecard.score).toEqual(0);
        });
    });
});