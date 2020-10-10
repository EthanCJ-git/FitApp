package com.ethan.FitAppBackend;

import java.util.HashSet;
import java.util.Set;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@ApplicationPath("API")
public class AppServ extends Application
{
	@Override
    public Set<Class<?>> getClasses() 
	{
        Set<Class<?>> classes = new HashSet<>();
        classes.add(RestRoot.class);
        return classes;
    }
}
