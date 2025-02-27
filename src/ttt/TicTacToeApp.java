package ttt;

public class TicTacToeApp {

	public static void main(String[] args) {
		// Controls the game flow(creating players, starting the game)
		boolean gameWon = false;
		Player currentPlayer;
		TicTacToeGame firstGame;
		
		//1.Initialize the game (create players, reset board)
		//Create player for the TTT game and set their for each at zero
		Player playerOne = new Player(0, 'X');
		Player playerTwo = new Player(0, 'O');
		
		//Sets the current Player to X(Usually goes first)
		currentPlayer = playerOne;
		
		
		//2.Game loop (keep playing until win or draw)
		while(gameWon != true && firstGame.isBoardFull()) {
			
			//3.Switch player turns
			//Sets the current Player to X
			currentPlayer = playerOne;
		
			//Changes the currentPlayer X to Player O
			if(currentPlayer == playerOne) {
				currentPlayer = playerTwo;
			}
			
			
		}//end of while loop
		
		
		//4.Take player input and validate it
		//5.Check for win or draw
		//6.Update and display scores
		 
	}

}
