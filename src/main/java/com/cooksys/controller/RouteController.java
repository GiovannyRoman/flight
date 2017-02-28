package com.cooksys.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.entity.Route;

import com.cooksys.service.RouteService;


@RestController
@RequestMapping("routes")
@CrossOrigin
public class RouteController {
	
	private final RouteService routeService;

	@Autowired
	public RouteController(RouteService routeService) {
		this.routeService = routeService;
	}
	
	@RequestMapping("/{id}")
	public Route read(@PathVariable Long id){
		return this.routeService.read(id);
	}

}
