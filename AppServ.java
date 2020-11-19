package com.ethan.FitAppBackend;

import java.util.HashSet;
import java.util.Set;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import org.glassfish.jersey.jackson.JacksonFeature;

@ApplicationPath("API")
public class AppServ extends Application
{
	@Override
    public Set<Class<?>> getClasses() 
	{
        Set<Class<?>> classes = new HashSet<>();
        classes.add(RestRoot.class);
        classes.add(JacksonFeature.class);
        return classes;
    }
}
