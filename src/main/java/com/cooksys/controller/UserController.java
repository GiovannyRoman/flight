package com.cooksys.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.entity.Route;
import com.cooksys.entity.User;
import com.cooksys.service.UserService;

@RestController
@RequestMapping("users")
@CrossOrigin
public class UserController {
	
	private final UserService userService;

	@Autowired
	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}
	
	@RequestMapping("/{username}")
	public User read(@PathVariable String username){
		return this.userService.read(username);
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public User create(@RequestBody User user){
		return this.userService.create(user);
	}
	
	@RequestMapping(value ="/{username}/routes" ,method = RequestMethod.POST)
	public Route saveFlight(@PathVariable String username,@RequestBody Route route){
		return this.userService.saveFlight(username, route);
	}
	

}
