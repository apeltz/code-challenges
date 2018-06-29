/*
 * Challenge description: https://notehub.org/f4f85
 */

function getEncodedClockwiseOriginal(str, x, y) {
	// padEnd doesn't have great browser support
	str = str.toUpperCase().replace(/[^a-zA-Z]/g, '').padEnd(x*y, 'X');
	let result = 'X'.repeat(x*y).split('');

	let charAtIdx = 0;
	let yDist = y;
	let xDist = x;
	let yCounter = 1;
	let xCounter = 1;
	let dir = 'y';
	let inc = 1;
	for (let i=1; i<=str.length; i++) {
		if (dir === 'y') {
			charAtIdx = charAtIdx+(inc*x);
			result[i-1] = str[charAtIdx-1]
			if (yCounter === yDist) {
				yDist--;
				yCounter = 0;
				inc = -1 * inc;
				dir = 'x'
			}
			yCounter++;
			continue;
		}
		if (dir === 'x') {
			charAtIdx = charAtIdx+(inc);
			result[i-1] = str[charAtIdx-1];
			if(xCounter === xDist-1) {
				xDist--;
				xCounter = 0;
				dir = 'y';
			}
			xCounter++;
			continue
		}

	}

	return result.join('').toUpperCase();
}

function getEncodedClockwise(str, x, y) {
	// padEnd doesn't have great browser support
	str = str.toUpperCase().replace(/[^a-zA-Z]/g, '').padEnd(x*y, 'X');
	// generate a result string of the appropriate length so we can swap characters by index
	let result = 'X'.repeat(x*y).split('');

	let charAtIdx = 0;
	// keeps track of the x- and y-axis distances to travel on next rotation
	let yDist = y;
	let xDist = x;
	// keeps track of the remaining distance to travel before the next roration
	let counter = 0;
	// current axis along which we are traveling
	let dir = 'y';
	// current direction we are traveling along the axis
	let inc = 1;

	for (let i=1; i<=str.length; i++) {
		let isY = dir === 'y';
		counter++;
		charAtIdx = isY ? charAtIdx+(inc*x) : charAtIdx+(inc);
		result[i-1] = str[charAtIdx-1]
		let changeDir = isY && counter === yDist || !isY && counter === xDist-1;
		if (changeDir) {
			isY ? yDist-- : xDist--;
			dir = isY ? 'x' : 'y';
			inc = isY ? -inc : inc;
			counter = 0;
		}
	}

	return result.join('');
}


module.exports = {
	getEncodedClockwise: getEncodedClockwise
}
