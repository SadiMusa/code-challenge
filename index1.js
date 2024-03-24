

public class GradeCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt user for input
        System.out.println("Enter student marks (between 0 and 100): ");
        int marks = scanner.nextInt();

        // Validate input
        if (marks < 0 || marks > 100) {
            System.out.println("Invalid marks entered. Marks should be between 0 and 100.");
        } else {
            // Determine grade
            char grade;
            if (marks > 79) {
                grade = 'A';
            } else if (marks >= 60) {
                grade = 'B';
            } else if (marks >= 50) {
                grade = 'C';
            } else if (marks >= 40) {
                grade = 'D';
            } else {
                grade = 'E';
            }

            // Output grade
            System.out.println("Grade: " + grade);
        }

        scanner.close();
    }
}
