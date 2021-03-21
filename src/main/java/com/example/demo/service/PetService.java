package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Pet;
import com.example.demo.repository.PetRepository;

@Service
public class PetService{
	@Autowired
	private PetRepository repository;
	
	
	public Pet savePet(Pet pet) {
		return repository.save(pet);
	}
	
	public List<Pet> savePets(List<Pet> pets) {
		return repository.saveAll(pets);
	}
	//get
	public List<Pet> getPets(){
		return repository.findAll();
	}
	
	public Pet getPetById(int id){
		return repository.findById(id).orElse(null);
	}
	
	public List<Pet> getPetsByAdopted(boolean adopted) {
		return repository.findByAdopted(adopted);
	}
	
	public List<Pet> getPetsByType(String type){
		return repository.findByType(type);
	}
	
	//delete
	public String deletePet(int id) {
		repository.deleteById(id);
		return "Pet with id="+ id + " removed!";
	}
	
	//put
	public Pet updatePet(Pet pet) {
		Pet existingPet = repository.findById(pet.getId()).orElse(null);
		existingPet.setType(pet.getType());
	    existingPet.setName(pet.getName());
	    existingPet.setAdopted(pet.isAdopted());
	    existingPet.setAge(pet.getAge());
	    existingPet.setBreed(pet.getBreed());
	    existingPet.setVaccinated(pet.isVaccinated());
	    
	    return repository.save(existingPet);
	    
	}
	
	
}
