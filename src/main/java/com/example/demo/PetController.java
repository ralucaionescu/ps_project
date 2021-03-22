package com.example.demo;



import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Pet;
import com.example.demo.service.PetService;

import ch.qos.logback.core.net.SyslogOutputStream;

@RestController
public class PetController {
	
	@Autowired
	private PetService service;
	
	@PostMapping("/pets")
	public Pet addPet(@RequestBody Pet pet) {
		return service.savePet(pet);
	}
	
	@GetMapping("/pets")
	public List<Pet> findAllPets(@RequestParam(value="id") Optional<Integer> id, @RequestParam(value="adopted") Optional<Boolean> adopted,@RequestParam(value="type") Optional<String> type){
	
		
		
		if(!id.isPresent() && !adopted.isPresent() && !type.isPresent())
		    return service.getPets();
		List<Pet> pets = new ArrayList<Pet>();
		if(id.isPresent()) {
			pets.add(service.getPetById(id));
		}
		else {
		
		 if(adopted.isPresent() && !type.isPresent()) {
			 
			return service.getPetsByAdopted(adopted);
		}
		
	    if(type.isPresent() && !adopted.isPresent()) {
			
			return service.getPetsByType(type);
			
		}
		if(type.isPresent() && adopted.isPresent()) {
			return service.getPetsByTypeAndByAdopted(adopted, type);
		}
		}
		return pets;
		
	}
	
	
	@PutMapping("/pets")
	public Pet updatePet(@RequestBody Pet pet) {
		return service.updatePet(pet);
	}
	
	@DeleteMapping("/pets/{id}")
	public String deletePet(@PathVariable int id) {
		return service.deletePet(id);
	}

	

}
