package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.User;

public interface RegistrationRepository extends JpaRepository<User, Integer> {


	User findByEmail(String tempEmailId);

	User findByEmailAndPassword(String email, String password);

	User findById(Optional<Integer> id);

	
}
