public class SpeedingTicket {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the speed of the car: ");
        int speed = scanner.nextInt();
        calculateDemeritPoints(speed);
    }

    public static void calculateDemeritPoints(int speed) {
        final int SPEED_LIMIT = 70;
        final int POINTS_PER_DEMERIT = 1;
        final int DEMERIT_THRESHOLD = 12;

        if (speed <= SPEED_LIMIT) {
            System.out.println("Ok");
            return;
        }

        int demeritPoints = (speed - SPEED_LIMIT) / 5;
        System.out.println("Points: " + demeritPoints);

        if (demeritPoints >= DEMERIT_THRESHOLD) {
            System.out.println("License suspended");
        }
    }
}
