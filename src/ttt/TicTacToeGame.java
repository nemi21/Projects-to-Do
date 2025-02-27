package ttt;

public class TicTacToeGame {
//Manages the board, player turns, and game rules
	
	//3X3 board for the Tic Tac Toe Game
	char [][] gameBoard = {
		{' ', ' ', ' '},
		{' ', ' ', ' '},
		{' ', ' ', ' '}
	};
	
	Player currentPlayer; 
	
	 public TicTacToeGame() {
		 
	 }
	
	
	//Method that checks if the current player has won the game
	private boolean checkWin(char player) {
		for(int i = 0; i < 3; i ++) {
			//Row and Column check for winner or 
			//up, down, or across as winner
			if((gameBoard[i][0] == player && gameBoard[i][1] == player && gameBoard[i][2] 
					== player) || (gameBoard[0][i] == player && gameBoard[1][i] == 
					player && gameBoard[2][i] == player)) {
				
				return true;
			}//end of if
		}//end of for loop
		
		//C
			if((gameBoard[0][0] == player && gameBoard[1][1] == player
					&& gameBoard[2][2] == player) || (gameBoard[0][2] == player
					&& gameBoard[1][1] == player && gameBoard[2][0] == player)) {
				return true;
			}//end of if
		
		//If there are not win conditions the game continue  
		return false;
	}//end of checkWIn method
	
	//Check to see if the player inputed the correct input
	private boolean isValidMove(int row, int column) {
		//Checks to see if row is placement is above or below the
		//threshold for the Row
		if(row >= 3  || row < 0) {
			System.out.println("Row is invalid please put in a valid"
					+ " number between 0-2");
			return false;
		}//end of if
		
		if(column >= 3  || column < 0 ) {
			System.out.println("Column is invalid please put in a " + 
		"number must be between 0-2");
		}//end of if
		
		//Checks to see if either the row or column is empty
		if(gameBoard[row][column] != ' ') {
			System.out.println("The Row or Column is not empty " + 
		"please place the input inside a empty cell");
			return false;
		}
		
		return true;
	}//end of isValidMove method
	
	//Method checks if the char array is empty or not
	private boolean isBoardFull() {
		for(int i = 0; i < 3; i++) {
			for(int j = 0; j < 3; j++) {
				//checks if the board is empty or not by counting 
				//each cell in the array
				if(gameBoard[i][j] == ' ') {
					return false;
				}//end of if
			}//end of for
		}//end of for
		//The board is not empty
		return true;
	}
	
	private void printBoard() {
		System.out.println(" 0 1 2");//print out the column numbers
		
		for(int i = 0; i < 3; i++) {
			System.out.println(i + " "); //Prints out the row numbers
			for(int j = 0; j < 3; j++) {
				System.out.println(gameBoard[i][j]);//Prints the actual content X and O and empty space
				if(j < 2) System.out.println("|");
			}//end of for
			
			System.out.println();//Move to the next line after printing a row
			if(i < 2) System.out.println(" -----");//Prints the horizontal separators between rows
		}//end of for
	}
	
	
}//end of class
