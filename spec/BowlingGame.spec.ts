import BowlingGame, { Game } from "../src/BowlingGame";

describe("BowlingGame calculates the correct score", () => {
    it("All rolls are 0", () => {
		var score: Game = [
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
		]
        expect(BowlingGame(score)).toBe(0);
    });
});