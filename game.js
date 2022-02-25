// --- Directions
// Create a replica of a simple memory matching game 
// Example 1: https://www.happyclicks.net/memory-games/7_memory_game_dolls.php
// Example 2: https://santatracker.google.com/matching.html

// First, you must first create a game board
// The game board takes an array of fruit and 
// randomly shuffles two of each item into a new array, which will serve as our game board  
// Example gameBoard: ['pear', 'bannana', 'bannana', 'apple', 'pear', 'apple];
// Note: everytime I call "shuffleBoard", I should get an array with a different order of fruit

// Next, create a match function that takes in two numbers 
// The numbers represent the indices of hidden items on the game board 
// Print the items at the given indices
// Continue guessing until all matches have been made

// Last, determine if the game is over
// If all matches have been made, print a statement declaring the game over

const fruit = [
  'apple',
  'bannana',
  'pear'
];

const gameBoard = [];

// --- Step 1: Create the game board
function shuffleBoard(){}

// -- Step 2: Create the matching game 
function match(){}

// -- Step 3: Determine if a user has won the game 
function hasUserWon(){}

// shuffle the board on page load 
shuffleBoard();

// Use the match method in the console to play the game!
// match(0,1);
// match(2,3);
// match(4,5);
