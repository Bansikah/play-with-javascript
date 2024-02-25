import java.util.Scanner;

/**
 * Main
 */
public class Main {
    private static void getUsrOption(){
        System.out.println("\n"+"Choose an operation...");
        System.out.println("\n"+"1. Addition");
        System.out.println("\n"+"2. Subtraction");
        System.out.println("\n"+"3. Division");
        System.out.println("\n"+"4. Multiiplication");
        System.out.println("\n"+"5. Exit"+"\n");

        Scanner choice = Calculator.input;

        switch (choice.nextInt()) {
            case 1:
                int sum = Calculator.addition();
                System.out.println("\n"+"The sum is: "+ sum);
                break;
            
            case 2:    
                int difference = Calculator.subtraction();
                System.out.println("\n"+"The difference is: "+difference);
                break;

            case 3:
                double quotient = Calculator.division();
                System.out.println("\n"+"The quotient is: "+quotient);
                break;

            case 4:
                double product = Calculator.multiplication();
                System.out.println("\n"+"The product is: "+product);
                break;

            case 5:
                System.out.println("\n"+"Exited...");
                break;    

            default:
                System.out.println("\n"+"Invalid option");
                break;
        }
    }
    public static void main(String[] args) {
        getUsrOption();
    }
}