package com.cooksys.entity;

import java.util.ArrayList;
import java.util.List;

import com.cooksys.pojo.Flight;

public class CityFlights {

	private String city;
	private List<Flight> flights;

	public CityFlights() {
		super();
	}

	public CityFlights(String city, List<Flight> flights) {
		super();
		this.city = city;
		this.flights = flights;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public List<Flight> getFlights() {
		return flights;
	}

	public void setFlights(List<Flight> flights) {
		this.flights = flights;
	}

	public List<CityFlights> makeRoutes(List<Location> locations, List<Flight> allPossibleFlights) {
		List<CityFlights> routes = new ArrayList<CityFlights>();
		for (Location loc : locations) {
			String city = loc.getCity();
			List<Flight> allCityFlights = new ArrayList<Flight>();
			for (Flight fli : allPossibleFlights) {
				if (fli.getOrigin().equals(city)) {
					allCityFlights.add(fli);
				}
			}
			routes.add(new CityFlights(city, allCityFlights));
		}
		return routes;
	}

	public CityFlights getCityFlight(String cityName, List<CityFlights> citys) {
		for (CityFlights cit : citys) {
			if (cit.getCity().equals(cityName)) {
				return cit;
			}
		}
		return null;
	}

	public List<Flight> getPossibleCityFlightsToDestination(String start, String end, List<CityFlights> routes,
			int layover) {

		CityFlights city = this.getCityFlight(start, routes);
		List<Flight> flit = city.getFlights();
		List<Flight> possible = new ArrayList<Flight>();
		for (Flight fli : flit) {
			if (start.equals(fli.getOrigin()) && end.equals(fli.getDestination()) && fli.getOffset() > layover) {
				possible.add(fli);
	
			}
		}
		return possible;
	}

	public List<Flight> getPossibleConnection(String start, String end, List<CityFlights> routes, int layover) {

		CityFlights city = this.getCityFlight(start, routes);
		List<Flight> flit = city.getFlights();
		List<Flight> possible = new ArrayList<Flight>();
		for (Flight fli : flit) {
			if (start.equals(fli.getOrigin()) && !end.equals(fli.getDestination()) && fli.getOffset() > layover) {
				possible.add(fli);

			}
		}
		return possible;
	}

	public List<List<Flight>> makeConnectedFlights(List<List<Flight>> prev, List<Flight> next, String end) {
		List<List<Flight>> route = new ArrayList<List<Flight>>();
		for (List<Flight> fli : prev) {
			for (Flight flig : next) {
				Flight temp = fli.get(fli.size() - 1);
				if (flig.getOffset() > getLayover(fli) && !checkVisited(fli, flig)
						&& temp.getDestination().equals(flig.getOrigin()) && !temp.getDestination().equals(end)) {
					fli.add(flig);
					route.add(fli);
				}
			}
		}
		return route;
	}

	public long getLayover(List<Flight> flights) {
		long current_layover = 0;
		int curr = 0;
		if (flights.size() == 1) {
			return current_layover = flights.get(curr).getOffset() + flights.get(curr).getFlightTime();
		} else {
			for (int i = 1; i <= flights.size() - 1; i++) {
				current_layover = flights.get(i).getOffset() - flights.get(curr).getFlightTime()
						- flights.get(curr).getOffset();
				curr = i;
			}
			return current_layover;
		}
	}

	public boolean checkVisited(List<Flight> flights, Flight visited) {
		for (Flight fli : flights) {
			if (fli.getOrigin().equals(visited.getDestination())) {
				return true;
			}
		}
		return false;
	}

	public List<List<Flight>> findAllPaths(List<Location> locations, List<Flight> allPossibleFlights, String start,
			String end) {
		List<CityFlights> map = this.makeRoutes(locations, allPossibleFlights);
		List<List<Flight>> allRoutes = new ArrayList<List<Flight>>();

		if(this.getCityFlight(start,map).getFlights() !=null){
			allRoutes.add(this.getCityFlight(start,map).getFlights());
			for(List<Flight> fli : allRoutes){
				
			}
		}
		return allRoutes;
	}

}
