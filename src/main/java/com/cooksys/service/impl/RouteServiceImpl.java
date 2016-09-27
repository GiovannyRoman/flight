package com.cooksys.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cooksys.entity.Route;
import com.cooksys.repository.RouteRepository;
import com.cooksys.service.RouteService;

@Service
public class RouteServiceImpl implements RouteService{
	
	private final RouteRepository repo;

	@Autowired
	public RouteServiceImpl(RouteRepository repo) {
		super();
		this.repo = repo;
	}

	@Override
	public Route read(Long id) {
		return this.repo.findOne(id);
	}

}
