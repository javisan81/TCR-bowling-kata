export type Frame = [number, number | "/"];
export type Game = Frame[];

function BowlingGame(game: Game) {
	let total = 0;
	game.forEach((frame, index) => {
		if(typeof frame[1] === "number"){
			total += (frame[0] + frame[1]);
		}
		else{
			// Spare
			total += 10;
			total += game[index+1][0];
		}
	})
	return total;
}

export default BowlingGame;