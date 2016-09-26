package com.cooksys.entity;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;

import com.cooksys.pojo.Flight;

public class Graph {

	private HashMap<String, List<Flight>> graph;

	public Graph(HashMap<String, List<Flight>> graph) {
		super();
		this.graph = graph;
	}

	public Graph() {
		super();
	}

	public HashMap<String, List<Flight>> getGraph() {
		return graph;
	}

	public void setGraph(HashMap<String, List<Flight>> graph) {
		this.graph = graph;
	}

	public Graph makeGraph(List<Location> locations, List<Flight> flights) {
		HashMap<String, List<Flight>> map = new HashMap<String, List<Flight>>();
		for (Location loc : locations) {
			List<Flight> stored = new ArrayList<Flight>();
			for (Flight fli : flights) {
				if (loc.getCity().equals(fli.getOrigin())) {
					stored.add(fli);
				}
			}
			map.put(loc.getCity(), stored);
		}
		return new Graph(map);
	}

	public int maxNumOfHops() {
		return graph.size() - 1;
	}
	
//	public List<Route> findPath(String origin,String Destination, int hop, int layover,Graph graph){
//		if(graph.graph.isEmpty()|| !graph.graph.containsKey(Destination)){
//			return null;
//		}
//	}

}
