package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Center;
import com.example.demo.model.Rating;
import com.example.demo.model.RatingKey;
import com.example.demo.model.User;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Integer> {

	Rating findById(Optional<Integer> id);

	Optional<Rating> findByUser(User user);


	Optional<Rating> findByUserAndCenter(User user, Center center);

}
