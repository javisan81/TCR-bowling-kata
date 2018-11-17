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
	
	it("All rolls are 9", () => {
		var score: Game = [
			[9,0],
			[1,8],
			[2,7],
			[3,6],
			[4,5],
			[5,4],
			[6,3],
			[7,2],
			[8,1],
			[0,9],
		]
        expect(BowlingGame(score)).toBe(90);
	})
});