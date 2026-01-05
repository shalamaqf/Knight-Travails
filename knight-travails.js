import { generatePositions, 
         generateUnvisitedPositions, 
         createNewPair, 
         constructPath,
         markVisited } from "./helper-functions.js";


// Create a function to generate shortest path of knight moves
function knightMoves(startPosition, targetedPosition) {
    // Check if the start position is equal to targeted position
    if (startPosition[0] === targetedPosition[0] && startPosition[1] === targetedPosition[1]) return startPosition;

    // Create an array as a queue
    const queue = [startPosition];

    // Create an array to store the visited positions
    const visitedArray = [startPosition];

    // Create an array to store pairs of child position and its parent
    const pairsArray = [];

    // Create a variable to keep track the current position
    let currentPosition;

    // Loop while the queue is not empty
    while (queue.length !== 0) {
        // Set the current position
        currentPosition = queue.shift();

        // Check if the current position is equal to targeted position
        if (currentPosition[0] === targetedPosition[0] && currentPosition[1] === targetedPosition[1]) break;

        // Generate next possible positions
        const possiblePositions = generatePositions(currentPosition);

        // Generate unvisited positions
        const unvisitedPositions = generateUnvisitedPositions(possiblePositions, visitedArray);

        // Create new pairs of child position and its parent
        createNewPair(unvisitedPositions, currentPosition, pairsArray);

        // Mark discovered positions to be visited
        markVisited(unvisitedPositions, visitedArray);

        // Push each unvisited position to the queue
        unvisitedPositions.forEach(position => {
            queue.push(position);
        });
    }

    // Return the shortest path
    return constructPath(targetedPosition, startPosition, pairsArray);
}