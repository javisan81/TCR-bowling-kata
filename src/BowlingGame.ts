export type Frame = [number, number];
export type Game = Frame[];

function BowlingGame(game: Game) {
	let total = 0;
	game.forEach((frame) => total += (frame[0] + frame[1]))
	return total;
}

export default BowlingGame;