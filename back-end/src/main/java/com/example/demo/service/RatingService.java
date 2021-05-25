package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Rating;
import com.example.demo.model.RatingKey;
import com.example.demo.repository.RatingRepository;

@Service
public class RatingService {

	@Autowired	
	private RatingRepository repo;
	
	//post
	public Rating saveRating(Rating rating) {
		
		return repo.save(rating);
	}
	
	public List<Rating> saveRatings(List<Rating> ratings){
		return repo.saveAll(ratings);
	}
	//get
	
	public List<Rating> getRatings(){
		return repo.findAll();
	}
	
	public Rating getById(Optional<Integer> id) {
		return repo.findById(id);
	}
	

	//update
	
	public Rating updateRating(Rating rating) {

		//System.out.println(repo.findByUserAndCenter(rating.getUser(), rating.getCenter()));
		if(repo.findByUserAndCenter(rating.getUser(), rating.getCenter()).isEmpty()) {
			return repo.save(rating);
		}
	
		Rating existingRating = repo.findByUserAndCenter(rating.getUser(), rating.getCenter()).orElse(null);
		
		existingRating.setUser(rating.getUser());
		existingRating.setRate(rating.getRate());
		existingRating.setCenter(rating.getCenter());

		return repo.save(existingRating);
	}
	
}
