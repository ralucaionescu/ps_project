package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Center;


public interface CenterRepository  extends JpaRepository<Center, Integer> {

	List<Center> findByCity(String city);

	Center findById(Optional<Integer> id);

}
