package quizCode;

import java.util.*; // For Scanner and ArrayList

// Main class
public class QuizApplication {

    // Question class to store question data
    static class Question {
        String questionText; // Question content
        //array of Strings
        String[] options;    // Multiple-choice options
        //put the correct option in here
        int correctOption;   // Index of the correct option (0-based)

        // Constructor to initialize question object
        public Question(String questionText, String[] options, int correctOption) {
            this.questionText = questionText;
            this.options = options;
            this.correctOption = correctOption;
        }
    }

    public static void main(String[] args) {
        // Scanner for user input
        Scanner scanner = new Scanner(System.in);

        // Create a list to store quiz questions
        ArrayList<Question> quizQuestions = new ArrayList<>();

        // Adding questions to the quiz
        quizQuestions.add(new Question("What is the capital of France?",
                new String[]{"1. Berlin", "2. Madrid", "3. Paris", "4. Rome"}, 2));
        quizQuestions.add(new Question("Which programming language is used for Android development?",
                new String[]{"1. Python", "2. Java", "3. C++", "4. Kotlin"}, 3));
        quizQuestions.add(new Question("What is 5 + 3?",
                new String[]{"1. 5", "2. 8", "3. 9", "4. 7"}, 1));

        // Variable to keep track of the user's score
        int score = 0;

        // Iterating over the list of questions
        for (Question question : quizQuestions) {
            // Display the question
            System.out.println(question.questionText);

            // Display the options
            for (String option : question.options) {
                System.out.println(option);
            }

            // Prompt user for their answer
            System.out.print("Enter your choice (1-4): ");
            int userAnswer = scanner.nextInt() - 1; // Convert to 0-based index

            // Check if the answer is correct
            if (userAnswer == question.correctOption) {
                System.out.println("Correct!\n");
                score++; // Increment score for correct answer
            } else {
                System.out.println("Wrong! The correct answer is: "
                        + question.options[question.correctOption] + "\n");
            }
        }

        // Display final score
        System.out.println("Quiz Over! Your final score is: " + score + "/" + quizQuestions.size());

        // Close the scanner to avoid resource leaks
        scanner.close();
    }
}
