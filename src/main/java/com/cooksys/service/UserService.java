package com.cooksys.service;

import com.cooksys.entity.User;

public interface UserService {

	User create(User user);

	User read(String username);

}
