package com.cooksys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cooksys.entity.Route;
import com.cooksys.entity.SaveFlight;
import com.cooksys.entity.User;
import com.cooksys.repository.RouteRepository;
import com.cooksys.repository.SaveFlightRepository;
import com.cooksys.repository.UserRepository;
import com.cooksys.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	private final UserRepository repo;
	private final RouteRepository routeRepo;
	private final SaveFlightRepository saveFlightRepo;

	@Autowired
	public UserServiceImpl(UserRepository repo,RouteRepository routeRepo,SaveFlightRepository saveFlightRepo) {
		super();
		this.routeRepo = routeRepo;
		this.repo = repo;
		this.saveFlightRepo = saveFlightRepo;
	}

	@Override
	public User create(User user) {
		return this.repo.save(user);
	}

	@Override
	public User read(String username) {
		List<User> users = this.repo.findAll();
		for (User us : users) {
			if (username.equals(us.getUsername())) {
				return us;
			}
		}
		return null;
	}

	@Override
	public Route saveFlight(String username, Route route) {
		List<User>users = this.repo.findAll();
		User currentUser = null;
		for(User us : users) {
			if(username.equals(us.getUsername())){
				currentUser = us;
			}
		}
		List<SaveFlight> flights = route.getFlights();
		for(SaveFlight fligh: flights){
			fligh.setRoute(route);
		}
		route.setOwner(currentUser);
		currentUser.getRoutes().add(route);
		this.repo.saveAndFlush(currentUser);
		return route;
	}

}
