import BowlingGame, { Game } from "../src/BowlingGame";

describe("BowlingGame calculates the correct score", () => {
    it("0, when all rolls are 0", () => {
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
	
	it("90, when all rolls are 9", () => {
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
		];
        expect(BowlingGame(score)).toBe(90);
	});

	it("23, when a spare is followed by a 4-5 frame", () => {
		var score: Game = [
			[0,"/"],
			[4,5],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
		];
		expect(BowlingGame(score)).toBe(23);
	});

	it("29, when a strike is followed by a 4-5 frame", () => {
		var score: Game = [
			["x", undefined],
			[4,5],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
		];
		expect(BowlingGame(score)).toBe(28);
	});

	it("30, when a strike is followed by a spare", () => {
		var score: Game = [
			["x", undefined],
			[4,"/"],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
		];
		expect(BowlingGame(score)).toBe(30);
	});
});