// Create a function to check if a position is out of board
function isOutOfBoard(position) {
    if (position[0] > 7 || position[1] > 7 ||
        position[0] < 0 || position[1] < 0) {
            return true;
        }
    return false;
}