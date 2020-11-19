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
	private String name;
	private int cals;
	private int prot;
	private int carbs;
	private int fat;
	
	Food()
	{
		setName("");
		setCals(-1);
		setProt(-1);
		setCarbs(-1);
		setFat(-1);
	}
	
	Food(String name, int cals, int prot, int carbs, int fat)
	{
		this.setName(name);
		this.setCals(cals);
		this.setProt(prot);
		this.setCarbs(carbs);
		this.setFat(fat);
	}
	
	public String getName() 
	{
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getCals() {
		return cals;
	}

	public void setCals(int cals) {
		this.cals = cals;
	}

	public int getProt() {
		return prot;
	}

	public void setProt(int prot) {
		this.prot = prot;
	}

	public int getCarbs() {
		return carbs;
	}

	public void setCarbs(int carbs) {
		this.carbs = carbs;
	}

	public int getFat() {
		return fat;
	}

	public void setFat(int fat) {
		this.fat = fat;
	}

}
