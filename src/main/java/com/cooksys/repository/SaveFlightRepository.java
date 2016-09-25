package com.cooksys.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cooksys.entity.SaveFlight;

@Repository
public interface SaveFlightRepository extends JpaRepository<SaveFlight, Long> {

}
