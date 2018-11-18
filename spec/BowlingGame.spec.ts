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
			[0,0, undefined],
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

	it("35, for a double followed by 1-1", () => {
		var score: Game = [
			["x", undefined],
			["x", undefined],
			[1, 1],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
		];
		expect(BowlingGame(score)).toBe(35);
	});

	it("51, for a double followed by 1-spare", () => {
		var score: Game = [
			["x", undefined],
			["x", undefined],
			[1, "/"],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
		];
		expect(BowlingGame(score)).toBe(51);
	});

	it("60, for a triple", () => {
		var score: Game = [
			["x", undefined],
			["x", undefined],
			["x", undefined],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
			[0,0],
		];
		expect(BowlingGame(score)).toBe(60);
	});

	describe("on the final frame", () => {
		it("8, for a 4-4 frame", () => {
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
				[4,4, undefined],
			];
			expect(BowlingGame(score)).toBe(8);
		});

		it("10, for a spare and a gutter ball", () => {
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
				[4,"/", 0],
			];
			expect(BowlingGame(score)).toBe(10);
		});

		
		it("10, for a spare and a 10 roll", () => {
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
				[4,"/", 10],
			];
			expect(BowlingGame(score)).toBe(20);
		});

		it("30, for a strike and two 10 rolls", () => {
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
				["x", 10, 10],
			];
			expect(BowlingGame(score)).toBe(30);
		});
	});
});