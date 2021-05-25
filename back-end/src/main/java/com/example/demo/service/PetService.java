package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.model.Center;
import com.example.demo.model.Pet;
import com.example.demo.model.User;
import com.example.demo.repository.PetRepository;
import com.example.demo.repository.RegistrationRepository;

import constants.NotificationEndpoints;

@Service
public class PetService{
	
	@Autowired
	private PetRepository repository;
	@Autowired
	private RegistrationRepository repo;
	
	@Autowired
	private SimpMessagingTemplate template;
	
	public static final String USER_PET_ADDED = "/topic/socket/user";
	
	public Pet savePet(Pet pet) {
		//notificam userii ca a fost adaugat un nou pet
		this.template.convertAndSend(USER_PET_ADDED, "Admin has added a new pet with the name: "+pet.getName());
		return repository.save(pet);
	}
	
	public List<Pet> savePets(List<Pet> pets) {
		return repository.saveAll(pets);
	}
	//get
	public List<Pet> getPets(){
		return repository.findAll();
	}
	
	public Pet getPetById(Optional<Integer> id){
		return repository.findById(id);
	}
	
	public List<Pet> getPetsByAdopted(Optional<Boolean> adopted) {
		return repository.findByAdopted(adopted);
	}
	
	public List<Pet> getPetsByType(Optional<String> t){
		return repository.findByType(t);
	}
	
	//delete
	public void deletePet(int id) {
		repository.deleteById(id);	
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
	    existingPet.setImage(pet.getImage());
	    existingPet.setOwner(pet.getOwner());
	    existingPet.setCenter(pet.getCenter());
	    return repository.save(existingPet);
	    
	}

	public List<Pet> getPetsByTypeAndByAdopted(Optional<Boolean> adopted, Optional<String> t) {
		
		return repository.findByAdoptedAndType(adopted, t);
	}
	
	public Pet adoptPet(Pet pet, User user) {
		Pet existingPet = repository.findById(pet.getId()).orElse(null);
		if(existingPet.isAdopted()==false) {
			existingPet.setAdopted(true);
			existingPet.setOwner(user);
		}
		
		return repository.save(existingPet);
	}
	
	public Pet assignShelter(Pet pet, Center center) {
		Pet existingPet = repository.findById(pet.getId()).orElse(null);
		if(existingPet.isInShelter()==false) {
			existingPet.setInShelter(true);
			existingPet.setCenter(center);
		}
		
		return repository.save(existingPet);
	}
	
	
	
}
