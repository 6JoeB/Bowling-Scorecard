'use strict';

var scorecard;

beforeEach(function () {
    scorecard = new Scorecard;
});

describe("Bowling scorecard", function () {

    it('creates an instance of the scorecard', function () {
        expect(scorecard).toBeInstanceOf(Scorecard);
    });

    it('starts with a score of 0', function () {
        expect(scorecard.checkScore).toEqual(0)
    });
});