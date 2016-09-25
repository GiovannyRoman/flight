package com.cooksys.entity;

import java.util.List;
import javax.persistence.*;


@Entity
@Table(name = "User",uniqueConstraints = @UniqueConstraint(columnNames = { "username" }))
public class User {
	
	@Id
	@GeneratedValue
	private long id;
	
	@Column(name = "username")
	private String username;
	
	@Column(name = "password")
	private String password;
	
	@OneToMany(mappedBy = "owner" ,fetch=FetchType.EAGER)
	private List<Route> routes;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public List<Route> getRoutes() {
		return routes;
	}
	public void setRoutes(List<Route> routes) {
		this.routes = routes;
	}
	
}
