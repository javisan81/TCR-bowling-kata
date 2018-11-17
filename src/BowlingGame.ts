export type Frame = [number | "x", number | "/" | undefined];
export type EndFrame = [number | "x", number | "|", number | undefined];
export type Game = (Frame | EndFrame)[];

function BowlingGame(game: Game) {
	let total = 0;
	game.forEach((frame, index) => {
		total += getScoreForFrame(game, index);
	});
	return total;
}

const getScoreForFrame = (game: Game, index: number) => {
	if(game[index][2]){
		return scoreLastFrame(game, index);
	}
	const frame: Frame = game[index] as Frame;
	let total: number = 0;
	if(regularFrame(frame)){
		// Regular frame
		total += ((frame[0] as number) + (frame[1] as number));
	} else if (spare(frame)) {
		// Spare
		total += 10;
		total += (game[index+1][0] as number);
	} else {
		// Strike
		total += 10;
		if(strike(game[index+1])){
			total += 10;
			if(strike(game[index+2]))
			{
				total += 10;
			} else {
				total += (game[index+2][0] as number);
			}
		} else if (spare(game[index+1])){
			total += 10;
		} else {
			total += (game[index+1][0] as number) + (game[index+1][1] as number);
		}
	}
	return total;
}

const scoreLastFrame = (game: Game, index: number) => {return 0;}

export default BowlingGame;

const regularFrame = (frame: Frame | EndFrame) => typeof frame[0] === "number" && typeof frame[1] === "number";
const strike = (frame: Frame | EndFrame) => frame[0] === "x";
const spare = (frame: Frame | EndFrame) => frame[1] === "/";