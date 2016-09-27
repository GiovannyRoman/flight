package com.cooksys.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.cooksys.component.FlightGenerator;
import com.cooksys.pojo.Flight;

@Service
public class FlightService {

	@Autowired
	FlightGenerator generator;

	private ArrayList<Flight> flightList = new ArrayList<>();

	public ArrayList<Flight> getDailyFlightList() {
		return flightList;
	}

	// The fixedDelay parameter determines how often a new day is generated as
	// expressed in milliseconds
	@Scheduled(fixedDelay = 50000000)
	private void refreshFlights() {
		flightList = generator.generateNewFlightList();
	}

	public List<List<Flight>> findPaths(String start, String end) {
		List<List<Flight>> token = new ArrayList<List<Flight>>();
		long offset = -1;
		List<Flight> allFlight = getDailyFlightList();
		List<Flight> init = new ArrayList<Flight>();
		getnewPath(token, init, allFlight, start, end, offset);
		return token;
	}

	public void getnewPath(List<List<Flight>> token, List<Flight> currentTaken, List<Flight> allFlights,
			String starting, String ending, long offset) {
		for (Flight fli : allFlights) {
			// found flight with start->end and made it in time
			if (fli.getOrigin().equals(starting) && fli.getDestination().equals(ending) && offset < fli.getOffset()) {
				
				System.out.println(token.contains(currentTaken));

				// found new path
				if (!token.contains(currentTaken)) {
					token.add(currentTaken);
					currentTaken.remove(fli);
					// did not find new path
				} else {
					currentTaken.remove(fli);
				}

				// found a flight with same Start and can make it in time
			}
		}
		// found a flight with same Start and can make it in time
		for (Flight fli : allFlights) {
			if (fli.getOrigin().equals(starting) && fli.getOffset() > offset && fli.getDestination().equals(ending)) {
				currentTaken.add(fli);
				getnewPath(token, currentTaken, allFlights, fli.getDestination(), ending,
						fli.getOffset() + fli.getFlightTime() + 1);
			}
		}
	}

}
