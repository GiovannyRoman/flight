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
	
	
	@OneToMany(mappedBy = "route" ,fetch=FetchType.EAGER,cascade = CascadeType.ALL)
	private List<SaveFlight> flights;
	
	@Column(name ="origin")
	private String origin;
	
	@Column(name = "destination")
	private String destination;
	
	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	private User owner;
	
	

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
	
	
	
}
