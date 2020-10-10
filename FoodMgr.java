/**
 * 
 */
package com.ethan.FitAppBackend;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import javax.annotation.*;
import javax.naming.InitialContext;
import javax.naming.NamingException;

/**
 * @author Ethan Jones
 *
 */
public class FoodMgr 
{
	//@Resource(mappedName="jdbc/vpsmysql") //should figure out how to make this work
	DataSource ds;
	Connection conn;
	Food data;
	ArrayList<Food> searchResult;
	
	/* 
	 * We will have no need for food objects passed in 
	 * later, so this is a move constructor. Java does
	 * not have move semantic polymorphism, so if that 
	 * changes I will change this to copy construction
	 * and implement a move function.
	 */
	FoodMgr(Food move) throws SQLException, NamingException
	{
		data = move;
		move = new Food();
		
		InitialContext ctx = new InitialContext();
		ds = (DataSource) ctx.lookup("jdbc/vpsmysql");
		conn = ds.getConnection();
	}
	
	public void addFood() throws SQLException
	{
		String sql = "INSERT INTO Food VALUES (?,?,?,?,?);";
		PreparedStatement state = conn.prepareStatement(sql);
		
		state.setString(1, data.name);
		state.setDouble(2, data.cals);
		state.setDouble(3, data.prot);
		state.setDouble(4, data.carbs);
		state.setDouble(5, data.fat);
		
		state.executeUpdate();
	}
}
