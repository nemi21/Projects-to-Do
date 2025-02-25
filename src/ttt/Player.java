package ttt;

public class Player {
	//Stores player info(symbol, score).
	private int score;
	private char symbol;
	
	public Player(int score, char symbol) {
		this.score = 0;// The Default score
		this.symbol = symbol;
	}

	//Method to get the score
	public int getScore() {
		return score;
	}
	
	//Method to count the score instead of doing it manually
	public void incrementScore() {
		this.score++;
	}

	//Method to get the player symbol 
	public char getSymbol() {
		return symbol;
	}

	@Override
	public String toString() {
		return "Player " + symbol + " | Score: " + score;
	}
	
}
