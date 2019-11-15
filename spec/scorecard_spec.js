'use strict';

var scorecard;

beforeEach(function () {
    scorecard = new Scorecard;
});

describe("Bowling scorecard", function () {

    it('creates an instance of the scorecard', function () {
        expect(scorecard).toBeInstanceOf(Scorecard);
    });
});