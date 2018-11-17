export type Frame = [number | "x", number | "/" | undefined];
export type EndFrame = [number | "x", number | "/", number | undefined];
export type Game = (Frame | EndFrame)[];

function BowlingGame(game: Game) {
	let total = 0;
	game.forEach((frame, index) => {
		const nextFrame = game[index+1],
			  nextnextFrame = game[index+2];
		total += getScoreForFrame(frame, nextFrame, nextnextFrame);
	});
	return total;
}
 
const getScoreForFrame = (frame: Frame | EndFrame, nextFrame: Frame | EndFrame, nextnextFrame: Frame | EndFrame) => {
	if(typeof frame[2] === "number"){
		return scoreLastFrame(frame as EndFrame);
	}

	let total: number = 0;
	if(regularFrame(frame)){
		// Regular frame
		total += ((frame[0] as number) + (frame[1] as number));
	} else if (spare(frame)) {
		// Spare
		total += 10;
		total += (nextFrame[0] as number);
	} else {
		// Strike
		total += 10;
		if(strike(nextFrame)){
			total += 10;
			if(strike(nextnextFrame))
			{
				total += 10;
			} else {
				total += (nextnextFrame[0] as number);
			}
		} else if (spare(nextFrame)){
			total += 10;
		} else {
			total += (nextFrame[0] as number) + (nextFrame[1] as number);
		}
	}
	return total;
}

const scoreLastFrame = (frame : EndFrame) => {
	if (spare(frame)) return 10 + (frame[2] as number);
	return 0;
}

export default BowlingGame;

const regularFrame = (frame: Frame | EndFrame) => typeof frame[0] === "number" && typeof frame[1] === "number";
const strike = (frame: Frame | EndFrame) => frame[0] === "x";
const spare = (frame: Frame | EndFrame) => frame[1] === "/";