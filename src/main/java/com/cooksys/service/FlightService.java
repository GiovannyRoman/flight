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

	public List<Flight> getnewPath(List<List<Flight>> token, List<Flight> currentTaken, List<Flight> allFlights,
			String starting, String ending, long offset) {
		
		List<Flight> possibleFlights = new ArrayList<Flight>();
		
		if(starting.equals(ending)){
			return currentTaken;
		}
		
		for(Flight flight : allFlights){
			if(flight.getOrigin().equals(starting) && offset < flight.getOffset()){
				possibleFlights.add(flight);
			}
		}
		if(possibleFlights.isEmpty()){
			return null;
		}else {
			for(Flight fligh :possibleFlights){
				List<Flight> fli = new ArrayList<Flight>();
				if(currentTaken.isEmpty()){
					fli.add(fligh);
					token.add(getnewPath(token,fli,allFlights,fligh.getDestination(),ending,fligh.getFlightTime()+fligh.getOffset()+1));
				}else{
					for(Flight taverse: currentTaken){
						fli.add(taverse);
					}
					fli.add(fligh);
					token.add(getnewPath(token,fli,allFlights,fligh.getDestination(),ending,fligh.getFlightTime()+fligh.getOffset()+1));
				}	
			}
			return token.get(token.size()-1);	
		}
	}
}
