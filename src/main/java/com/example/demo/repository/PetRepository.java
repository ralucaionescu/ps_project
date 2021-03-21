package com.example.demo.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Pet;

public interface PetRepository extends JpaRepository<Pet, Integer> {

	List<Pet> findByAdopted(boolean adopted);

	List<Pet> findByType(String type);

	
}
