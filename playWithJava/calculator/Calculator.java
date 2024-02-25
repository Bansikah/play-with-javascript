import java.util.Scanner;
public class Calculator{
    public static Scanner input = new Scanner(System.in);
    private static int[] numbers;

    private static void getInputs(){
        System.out.println("\n"+"Enter two numbers");
        int a = input.nextInt();
        int b = input.nextInt();   
        numbers = new int[]{a,b};                                                                                                                                                                                                                       
    }

    public static int addition(){
        getInputs();
        int sum = numbers[0] + numbers[1];

        return sum;
    }

    public static int subtraction(){
        getInputs();
        int minus = numbers[1] - numbers[0];

        return minus;
    }

    public static double division(){
        getInputs();
        int divide = numbers[1] / numbers[0]; 

        return divide;
    }

    public static double multiplication(){
        getInputs();
        int multiply = numbers[0] * numbers[1];

        return multiply;
    }
}
