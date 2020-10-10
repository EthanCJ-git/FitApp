/**
 * 
 */
package com.ethan.FitAppBackend;

/**
 * @author ethan jones
 * Data class for receiving/sending 
 * json entities.
 */
public class Food 
{
	Food()
	{
		name = "";
		cals = -1;
		prot = -1;
		carbs = -1;
		fat = -1;
	}
	
	String name;
	double cals;
	double prot;
	double carbs;
	double fat;
}
