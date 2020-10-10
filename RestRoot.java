package com.ethan.FitAppBackend;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.SQLException;
import java.util.logging.*;

@Path("food")
public class RestRoot 
{
    @SuppressWarnings("unused")
    @Context
    private UriInfo context;
    
    
    public RestRoot() 
    {
        // TODO Auto-generated constructor stub
    }

    /**
     * Retrieves representation of an instance of RestRoot
     * @return an instance of String
     */
    @GET
    @Produces("application/json")
    public String getJson() 
    {
        // TODO return proper representation object
        throw new UnsupportedOperationException();
    }
    
    @GET
    @Produces("text/html")
    public String getTest()
    {
    	try {
			BufferedWriter out = new BufferedWriter(
					new FileWriter("/home/ethan/portfolio/fitApp/degub.log", true)
					);
			out.write("youre in the right place\n");
			out.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	return "youre in the right place";
    }

    /**
     * PUT method for updating or creating an instance of RestRoot
     * @param content representation for the resource
     * @return an HTTP response with content of the updated or created resource.
     */
    @PUT
    @Consumes("application/json")
    public void putJson(Food content) 
    {
    	try {
			BufferedWriter out = new BufferedWriter(
					new FileWriter("/home/ethan/portfolio/fitApp/degub.log", true)
					);
			out.write("well you sent the right put\n");
			out.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	
    	try 
    	{
			FoodMgr adder = new FoodMgr(content);
			adder.addFood();
		} catch (Exception e) 
    	{
			//TODO: find a better way to handle this, will need to collab w front end
			e.printStackTrace();
			return;
		}
    	
    }

}