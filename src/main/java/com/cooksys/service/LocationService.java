package com.cooksys.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cooksys.entity.Graph;
import com.cooksys.entity.Location;
import com.cooksys.pojo.Flight;
import com.cooksys.repository.LocationRepository;

@Service
public class LocationService {
	
	@Autowired
	LocationRepository repo;
	
	@Autowired
	FlightService flightService;
		
	public List<Location> getAll()
	{
		return repo.findAll();
	}

	public Location get(long id) {
		return repo.findById(id);
	}
	
	public Location get(String name) {
		return repo.findByCity(name);
	}

	public Graph makeGraph() {
		Graph graph = new Graph();
		List<Location> locations = this.repo.findAll();
		List<Flight> flights = this.flightService.getDailyFlightList();
		return graph.makeGraph(locations,flights);
	}
}
