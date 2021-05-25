package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Center;
import com.example.demo.repository.CenterRepository;

@Service
public class CenterService {
	
	@Autowired
	private CenterRepository centerRepo;
	
	public Center saveCenter(Center center) {
		return centerRepo.save(center);
	}

	//get
	public List<Center> getAdoptionCenters() {
		return centerRepo.findAll();
	}

	public Center getById(Optional<Integer> id) {
		return centerRepo.findById(id);
	}
	
	public List<Center> getByCity(String city){
		return centerRepo.findByCity(city);
	}
	
	//put
	public Center updateCenter(Center center) {
		Center existingCenter = centerRepo.findById(center.getId()).orElse(null);
		existingCenter.setCity(center.getCity());
		existingCenter.setName(center.getName());
		existingCenter.setDescription(center.getDescription());
		return centerRepo.save(existingCenter);
	
	}
	
	//delete
	public void deleteAdoptionCenter(int id) {
		centerRepo.deleteById(id);
	}
	
	
	
	
	
}
