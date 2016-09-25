package com.cooksys.service;

import com.cooksys.entity.Route;
import com.cooksys.entity.User;

public interface UserService {

	User create(User user);

	User read(String username);

	Route saveFlight(String username,Route route);

}
