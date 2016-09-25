package com.cooksys.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cooksys.entity.Route;
import com.cooksys.entity.User;
import com.cooksys.repository.UserRepository;
import com.cooksys.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	private final UserRepository repo;

	@Autowired
	public UserServiceImpl(UserRepository repo) {
		super();
		this.repo = repo;
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
		currentUser.getRoutes().add(route);
		this.repo.save(currentUser);
		return route;
	}

}
