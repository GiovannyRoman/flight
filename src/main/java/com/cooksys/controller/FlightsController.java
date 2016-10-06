package com.cooksys.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.entity.Route;
import com.cooksys.pojo.Flight;
import com.cooksys.service.FlightService;
import com.cooksys.service.LocationService;

@RestController
@RequestMapping("flights")
@CrossOrigin
public class FlightsController {
	
	@Autowired
	LocationService locationService;
	
	@Autowired
	FlightService flightService;
	
	@RequestMapping
	public ArrayList<Flight> getFlightList()
	{
		return flightService.getDailyFlightList();
	}
	
	@RequestMapping(value = "/{start}/{end}")
	public Set<List<Flight>> getPath(@PathVariable String start,@PathVariable String end){
		return flightService.findPaths(start, end);
	}
	
	@RequestMapping(value = "/route/{start}/{end}")
	public List<Route> getRoute(@PathVariable String start,@PathVariable String end){
		return flightService.getAllRoutes(start, end);
	}

}
