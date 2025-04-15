package quizCode;

import java.util.*; // For Scanner and ArrayList

// Main class
public class QuizApplication {

	// Question class to store question data
     /*static class Question {
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
    }*/

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
        //add a fourth questions to the ArrayList
        quizQuestions.add(new Question("What is the second book of the Bible?",
        		new String[] {"1. Numbers", "2. Exodus", "3. Genesis", "4. Moses"}, 1));

        // Variable to keep track of the user's score
        int score = 0;

        // Iterating over the list of questions
        for (Question question : quizQuestions) {
            // Display the question
            System.out.println(question.getQuestionText());

            // Display the options
            for (String option : question.getOptions()) {
                System.out.println(option);
            }

         //Temporary variable to hold user input before validation
            int tempAns;
         //Final validated user answer (0-based index)
            int userAnswer = -1;

            // Loop until the user enters a valid input
            while (true) {
                // Prompt user for their answer
                System.out.print("Enter your choice (1-4): ");

                // Check if the next input is an integer
                if (scanner.hasNextInt()) {
                    tempAns = scanner.nextInt(); // Read the integer input

                    // Check if the input is within the valid range
                    if (tempAns >= 1 && tempAns <= 4) {
                        userAnswer = tempAns - 1; // Convert to 0-based index and store it
                        break; // Exit loop since we got valid input
                    } else {
                        // Inform the user if the number is out of range
                        System.out.println("Please enter a number between 1 and 4.");
                    }
                } else {
                    // Inform the user if the input was not a number
                    System.out.println("Invalid input. Please enter a number between 1 and 4.");
                }

                // Clear the invalid input (important when non-integer input is entered)
                scanner.nextLine();
            } // end of while

            
            // Check if the answer is correct
            if (userAnswer == question.getCorrectOption()) {
                System.out.println("Correct!\n");
                score++; // Increment score for correct answer
            } else {
                System.out.println("Wrong! The correct answer is: "
                        + question.getOptions()[question.getCorrectOption()] + "\n");
            }
        }//end of for

        // Display final score
        System.out.println("Quiz Over! Your final score is: " + score + "/" + quizQuestions.size());
        
        //Calculate Percentage Score
        double percentage = ((double) score / quizQuestions.size()) * 100;
        
        //Display score percentage with 1 decimal place
        System.out.printf("Your score: %.1f%%\n", percentage);
        
        //Give Comments based on the grade of Quiz
        if(percentage == 100) {
        	System.out.println("Perfect! you're a quiz master!");
        }else if(percentage  >= 75) {
        	System.out.println("Great Job! You know your stuff.");
        }else if(percentage >= 50) {
        	System.out.println("Not bad! A little more practice and you'll ace it.");
        }else {
        	System.out.println("Keep learning! You'll get better.");
        }
        
        
        // Close the scanner to avoid resource leaks
        scanner.close();
    }//end of main
}
