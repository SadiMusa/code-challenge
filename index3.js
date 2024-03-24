public class NetSalaryCalculator {
    // Constants for tax rates and deduction thresholds
    private static final double[] TAX_RATES = {0.1, 0.15, 0.2, 0.25, 0.3};
    private static final int[] TAX_THRESHOLDS = {24000, 40000, 72000, 136000, 208333};
    private static final double NHIF_RATE = 0.015;
    private static final double NSSF_RATE = 0.06;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Getting inputs
        System.out.print("Enter basic salary: ");
        double basicSalary = scanner.nextDouble();
        System.out.print("Enter benefits: ");
        double benefits = scanner.nextDouble();

        // Calculate gross salary
        double grossSalary = basicSalary + benefits;

        // Calculate taxable income
        double taxableIncome = grossSalary - calculateNHIF(basicSalary) - calculateNSSF(basicSalary);

        // Calculate PAYE
        double payee = calculatePAYE(taxableIncome);

        // Calculate net salary
        double netSalary = grossSalary - payee - calculateNHIF(basicSalary) - calculateNSSF(basicSalary);

        // Display results
        System.out.println("Gross Salary: " + grossSalary);
        System.out.println("PAYE: " + payee);
        System.out.println("NHIF Deductions: " + calculateNHIF(basicSalary));
        System.out.println("NSSF Deductions: " + calculateNSSF(basicSalary));
        System.out.println("Net Salary: " + netSalary);

        scanner.close();
    }

    // Method to calculate NHIF deductions
    private static double calculateNHIF(double basicSalary) {
        if (basicSalary < 6000) {
            return 150;
        } else if (basicSalary >= 6000 && basicSalary <= 8000) {
            return 300;
        } else if (basicSalary >= 8001 && basicSalary <= 12000) {
            return 400;
        } else if (basicSalary >= 12001 && basicSalary <= 15000) {
            return 500;
        } else if (basicSalary >= 15001 && basicSalary <= 20000) {
            return 600;
        } else if (basicSalary >= 20001 && basicSalary <= 25000) {
            return 750;
        } else if (basicSalary >= 25001 && basicSalary <= 30000) {
            return 850;
        } else if (basicSalary >= 30001 && basicSalary <= 35000) {
            return 900;
        } else if (basicSalary >= 35001 && basicSalary <= 40000) {
            return 950;
        } else if (basicSalary >= 40001 && basicSalary <= 45000) {
            return 1000;
        } else if (basicSalary >= 45001 && basicSalary <= 50000) {
            return 1100;
        } else if (basicSalary >= 50001 && basicSalary <= 60000) {
            return 1200;
        } else if (basicSalary >= 60001 && basicSalary <= 70000) {
            return 1300;
        } else if (basicSalary >= 70001 && basicSalary <= 80000) {
            return 1400;
        } else if (basicSalary >= 80001 && basicSalary <= 90000) {
            return 1500;
        } else if (basicSalary >= 90001 && basicSalary <= 100000) {
            return 1600;
        } else {
            return 1700;
        }
    }

    // Method to calculate NSSF deductions
    private static double calculateNSSF(double basicSalary) {
        return basicSalary * NSSF_RATE;
    }

    // Method to calculate PAYE
    private static double calculatePAYE(double taxableIncome) {
        double tax = 0;
        for (int i = TAX_THRESHOLDS.length - 1; i >= 0; i--) {
            if (taxableIncome > TAX_THRESHOLDS[i]) {
                tax += (taxableIncome - TAX_THRESHOLDS[i]) * TAX_RATES[i];
                taxableIncome = TAX_THRESHOLDS[i];
            }
        }
        return tax;
    }
}
