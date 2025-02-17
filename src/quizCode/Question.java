package quizCode;

public class Question {
	 private String questionText; // Question content
     //array of Strings
     private String[] options;    // Multiple-choice options
     //put the correct option in here
     private int correctOption;   // Index of the correct option (0-based)
     
     public Question(String questionText, String[] options, int correctOption) {
         this.questionText = questionText;
         this.options = options;
         this.correctOption = correctOption;
     }

	public String getQuestionText() {
		return questionText;
	}

	public void setQuestionText(String questionText) {
		this.questionText = questionText;
	}

	public String[] getOptions() {
		return options;
	}

	public void setOptions(String[] options) {
		this.options = options;
	}

	public int getCorrectOption() {
		return correctOption;
	}

	public void setCorrectOption(int correctOption) {
		this.correctOption = correctOption;
	}
     
     
}
