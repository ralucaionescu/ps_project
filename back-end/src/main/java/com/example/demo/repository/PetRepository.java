package com.example.demo.repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Pet;

public interface PetRepository extends JpaRepository<Pet, Integer> {

	List<Pet> findByAdopted(boolean adopted);

	List<Pet> findByType(String type);

	Pet findById(Optional<Integer> id);

	List<Pet> findByAdopted(Optional<Boolean> adopted);

	List<Pet> findByType(Optional<String> t);

	List<Pet> findByAdoptedAndType(Optional<Boolean> adopted, Optional<String> t);

	
}
