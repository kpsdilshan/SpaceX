/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package birthdaycake;

import java.util.Scanner;

/**
 *
 * @author Supun Dilshan
 */
public class BirthdayCake {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        
        int n = in.nextInt();
        int max = 0, totalMax = 0, num;
        
        for(int i =0; i < n; i++){
            num = in.nextInt();
            if(num > max){
                totalMax = 1;
                max = num;
            }else if(num == max){
                totalMax++;
            }
        }
        System.out.println(totalMax);
    }
    
}
