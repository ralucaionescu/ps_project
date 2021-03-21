package com.example.demo;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Pet;
import com.example.demo.service.PetService;

@RestController
public class PetController {
	
	@Autowired
	private PetService service;
	
	@PostMapping("/addPet")
	public Pet addPet(@RequestBody Pet pet) {
		return service.savePet(pet);
	}

	@PostMapping("/addPets")
	public List<Pet> addPets(@RequestBody List<Pet> pets) {
		return service.savePets(pets);
	}
	
	@GetMapping("/pets")
	public List<Pet> findAllPets(){
		return service.getPets();
	}
	
	@GetMapping("/pet/{id}")
	public Pet findPetById(@PathVariable int id){
		return service.getPetById(id);
	}
	
	@GetMapping("/petByStatus/{status}")
	public List<Pet> findPetByAdopted(@PathVariable boolean status){
		return service.getPetsByAdopted(status);
	}
	
	@GetMapping("/petByType/{type}")
	public List<Pet> findPetByType(@PathVariable String type){
		return service.getPetsByType(type);
	}
	
	
	@PutMapping("/update")
	public Pet updatePet(@RequestBody Pet pet) {
		return service.updatePet(pet);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deletePet(@PathVariable int id) {
		return service.deletePet(id);
	}

	

}
