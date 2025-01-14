package simpleGame;

import java.util.Scanner;

public class TicTacToe {

    // Define a 3x3 board for the game
    static char[][] board = {
        {' ', ' ', ' '},
        {' ', ' ', ' '},
        {' ', ' ', ' '}
    };

    public static void main(String[] args) {
        // Create a Scanner object to get user input
        Scanner scanner = new Scanner(System.in);

        // Start the game with Player 'X'
        char currentPlayer = 'X';

        // Variable to track if the game has been won
        boolean gameWon = false;

        // Main game loop
        while (!gameWon && !isBoardFull()) {
            // Print the current state of the board
            printBoard();

            // Ask the current player to make a move
            System.out.println("Player " + currentPlayer + ", enter your move (row [1-3] and column [1-3]): ");
            int row = scanner.nextInt() - 1; // Convert to zero-based index
            int col = scanner.nextInt() - 1; // Convert to zero-based index

            // Check if the move is valid
            if (isValidMove(row, col)) {
                // Place the player's symbol on the board
                board[row][col] = currentPlayer;

                // Check if the current player has won the game
                gameWon = checkWin(currentPlayer);

                // Switch to the next player
                currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
            } else {
                // If the move is not valid, ask the player to try again
                System.out.println("This move is not valid. Try again.");
            }
        }

        // Print the final state of the board
        printBoard();

        // Display the result of the game
        if (gameWon) {
            // The previous player is the winner since currentPlayer has already switched
            System.out.println("Player " + ((currentPlayer == 'X') ? 'O' : 'X') + " wins!");
        } else {
            // If no one wins, it's a draw
            System.out.println("It's a draw!");
        }

        // Close the Scanner
        scanner.close();
    }

    // Method to print the current state of the board
    public static void printBoard() {
        System.out.println("  1 2 3"); // Column numbers
        for (int i = 0; i < 3; i++) {
            // Print row number
            System.out.print((i + 1) + " ");
            for (int j = 0; j < 3; j++) {
                // Print the cell value and a separator
                System.out.print(board[i][j]);
                if (j < 2) System.out.print("|");
            }
            System.out.println();
            if (i < 2) System.out.println("  -----"); // Row separator
        }
    }

    // Method to check if a move is valid
    public static boolean isValidMove(int row, int col) {
        // A move is valid if it's within the board boundaries and the cell is empty
        return row >= 0 && row < 3 && col >= 0 && col < 3 && board[row][col] == ' ';
    }

    // Method to check if the board is full (indicating a draw)
    public static boolean isBoardFull() {
        // Loop through each cell of the board
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                // If there's an empty cell, the board is not full
                if (board[i][j] == ' ') return false;
            }
        }
        // If no empty cells were found, the board is full
        return true;
    }

    // Method to check if the current player has won
    public static boolean checkWin(char player) {
        // Check all rows and columns for a win
        for (int i = 0; i < 3; i++) {
            if ((board[i][0] == player && board[i][1] == player && board[i][2] == player) || // Row check
                (board[0][i] == player && board[1][i] == player && board[2][i] == player)) { // Column check
                return true;
            }
        }

        // Check both diagonals for a win
        if ((board[0][0] == player && board[1][1] == player && board[2][2] == player) || // Top-left to bottom-right diagonal
            (board[0][2] == player && board[1][1] == player && board[2][0] == player)) { // Top-right to bottom-left diagonal
            return true;
        }

        // If no winning condition is met, return false
        return false;
    }
}


