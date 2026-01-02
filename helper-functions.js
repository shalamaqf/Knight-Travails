// Create a function to generate next possible positions
function generatePositions(startPosition) {
    // Create an array for store the possible positions
    const possiblePositions = [];
    
    // Create two variables to store first and second number in the position
    const x = startPosition[0];
    const y = startPosition[1];

    // Create 8 positions
    const one = [x-1, y-2];
    const two = [x+1, y-2];
    const three = [x-2, y-1];
    const four = [x+2, y-1];
    const five = [x-2, y+1];
    const six = [x+2, y+1];
    const seven = [x-1, y+2];
    const eight = [x+1, y+2];

    // Check if a position is out of board
    if (!isOutOfBoard(one)) possiblePositions.push(one);
    if (!isOutOfBoard(two)) possiblePositions.push(two);
    if (!isOutOfBoard(three)) possiblePositions.push(three);
    if (!isOutOfBoard(four)) possiblePositions.push(four);
    if (!isOutOfBoard(five)) possiblePositions.push(five);
    if (!isOutOfBoard(six)) possiblePositions.push(six);
    if (!isOutOfBoard(seven)) possiblePositions.push(seven);
    if (!isOutOfBoard(eight)) possiblePositions.push(eight);

    // Return the possible positions
    return possiblePositions;
}

// Create a function to check if a position is out of board
function isOutOfBoard(position) {
    if (position[0] > 7 || position[1] > 7 ||
        position[0] < 0 || position[1] < 0) {
            return true;
        }
    return false;
}