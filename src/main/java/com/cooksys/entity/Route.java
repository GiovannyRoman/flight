package com.cooksys.entity;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Route")
public class Route {

	@Id
	@GeneratedValue
	private long id;

	@OneToMany(mappedBy = "route", fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	private List<SaveFlight> flights;

	@Column(name = "origin")
	private String origin;

	@Column(name = "destination")
	private String destination;

	@Column(name = "TotalflightTime")
	private long flightTime;
	
	@Column(name ="TotalLayOvertime")
	private long layovertime;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	private User owner;

	public Route() {
		super();
	}

	public Route(List<SaveFlight> flights, String origin, String destination, long flightTime, long layovertime) {
		super();
		this.flights = flights;
		this.origin = origin;
		this.destination = destination;
		this.flightTime = flightTime;
		this.layovertime = layovertime;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public List<SaveFlight> getFlights() {
		return flights;
	}

	public void setFlights(List<SaveFlight> flights) {
		this.flights = flights;
	}

	public User getOwner() {
		return owner;
	}

	public void setOwner(User owner) {
		this.owner = owner;
	}

	public String getOrigin() {
		return origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public long getFlightTime() {
		return flightTime;
	}

	public void setFlightTime(long flightTime) {
		this.flightTime = flightTime;
	}

	public long getLayovertime() {
		return layovertime;
	}

	public void setLayovertime(long layovertime) {
		this.layovertime = layovertime;
	}
	

}
