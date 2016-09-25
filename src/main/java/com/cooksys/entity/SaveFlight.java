package com.cooksys.entity;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class SaveFlight {

	@Id
	@GeneratedValue
	private long id;

	// Name of city where flight originates
	@Column(name = "origin")
	private String origin;

	// Name of city where flight lands
	@Column(name = "destination")
	private String destination;

	// How many hours flight is in the air
	@Column(name = "flightTime")
	private long flightTime;

	// How many hours after the start of the day until the flight takes off
	@Column(name = "off_set")
	private long offset;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	private Route route;

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

	public long getOffset() {
		return offset;
	}

	public void setOffset(long offset) {
		this.offset = offset;
	}

	public SaveFlight(String origin, String destination, long flightTime, long offset) {
		super();
		this.origin = origin;
		this.destination = destination;
		this.flightTime = flightTime;
		this.offset = offset;
	}

}
