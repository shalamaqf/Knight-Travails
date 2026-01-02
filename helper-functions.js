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

// Create a function to create a new pair of child and its parent
function createNewPair(arrayPositions, parentPosition, arrayPairs) {
    arrayPositions.forEach(position => {
        const pair = [position, parentPosition];
        arrayPairs.push(pair);
    });
}

// Create a function to construct the path
function constructPath(targetedPosition, startPosition, arrayPairs) {
    // Create an array for path
    const path = [targetedPosition];

    // Create a variable to store the length of the array of pairs
    const length = arrayPairs.length;

    // Create a variable to track the current position
    let current = targetedPosition;

    // Loop through the array of pairs till reach the start position
    while ((current[0] !== startPosition[0]) || current[1] !== startPosition[1]) {
        // Look for the parent
        for (let i = 0; i < length; i++) {
            if (current[0] === arrayPairs[i][0][0] && current[1] === arrayPairs[i][0][1]) { 
                path.push(arrayPairs[i][1]);
                current = arrayPairs[i][1];
                break;
            }
        }
    }

    // Put the start position to the array
    path.push(startPosition);

    // Return the path in reverse order
    return path.reverse();
}

// Create a function to generate unvisited positions
function generateUnvisitedPositions(arrayPositions, arrayVisited) {
    // Create an array to store unvisited positions
    const unvisitedPositions = [];

    // Create a variable to store the length of visited array
    const length = arrayVisited.length;

    // Loop to check each position is visited or not
    arrayPositions.forEach(position => {
        // Create a variable to mark visited
        let visited = false;

        for (let i = 0; i < length; i++) {
            if (position[0] === arrayVisited[i][0] && position[1] === arrayVisited[i][1]) {
                visited = true;
                break;
            }
        }

        if (visited === false) unvisitedPositions.push(position);
    });

    // Return the array of unvisited positions
    return unvisitedPositions;
}