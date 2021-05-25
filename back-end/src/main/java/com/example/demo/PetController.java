package com.example.demo;



import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Center;
import com.example.demo.model.Pet;
import com.example.demo.model.Rating;
import com.example.demo.model.User;
import com.example.demo.service.CenterService;
import com.example.demo.service.PetService;
import com.example.demo.service.RatingService;
import com.example.demo.service.RegistrationService;

@CrossOrigin(origins="*")
@RestController
@Controller
public class PetController {
	
	@Autowired
	private PetService service;
	
	@Autowired
	private RegistrationService serv;
	
	@Autowired
	private CenterService centerService;
	
	@Autowired
	private RatingService ratingService;
	
	
	@PostMapping("/register")
	public User regiterUser(@RequestBody User user) throws Exception
	{
		String tempEmailId = user.getEmail();
	    String passWord = user.getPassword();
	    
		if(tempEmailId != null) {
			
			User userObj = serv.fetchUserByEmailId(tempEmailId);
			
			if(userObj!=null) {
				throw new Exception("user with " + tempEmailId +  " already exist!" );
			}
			
			if(tempEmailId.equals("admin@admin.ro") && passWord.equals("admin")) {
				user.setRole("admin");
			}
			else {
				user.setRole("user");
			}
			
		}
		User userObj = null;
		
		userObj = serv.saveUser(user);
		
		return userObj;
	}
	@Transactional
	@CrossOrigin
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) throws Exception{
		String tempEmailId = user.getEmail();
		String tempPassword = user.getPassword();
		User userObj = null;
		if(tempEmailId != null && tempPassword!=null) {
			userObj = serv.fetchUserByEmailAndPassword(tempEmailId, tempPassword);
		}
		
		if(userObj == null) {
			throw new Exception("This user does not exist!");
		}
		
		return userObj;
	}
	
	
	@GetMapping("/user-profile/{id}")
	public List<Pet> getAdoptedPets(@PathVariable Optional<Integer> id){
		
		User user = serv.findById(id);
		return user.getPets();
		
	}
	
	@PostMapping("/pets")
	public Pet addPet(@RequestBody Pet pet) {
		
		return service.savePet(pet);
	}
	
		
	@PostMapping("/ratings")
	public Rating addRating(@RequestBody Rating rating) {
	
		return ratingService.updateRating(rating);
	}
	
	@GetMapping("/ratings")
	public List<Rating> addRating(@RequestParam(value="id") Optional<Integer> id) {
		List<Rating> ratings = new ArrayList<>();
		if(id.isPresent()) {
			ratings.add(ratingService.getById(id));
			return ratings;
		}
		return ratingService.getRatings();
		
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
	public Pet updatePet( @RequestParam(value="id") Optional<Integer> id,@RequestBody Pet pet) {
		
		if(id.isPresent()) {
			User user = serv.findById(id);
			return service.adoptPet(pet, user);
		}
		
		
		
		return service.updatePet(pet);
	}

	@PutMapping("/ratings")
	public Rating updateRating(@RequestBody Rating rating) {
	
		return ratingService.updateRating(rating);
	}
	
	
	@DeleteMapping("/pets/{id}")
	public void deletePet(@PathVariable int id) {
		 service.deletePet(id);
	}

	@GetMapping("/adoption-centers")
	public List<Center> getAdoptionCenters(@RequestParam(value="id") Optional<Integer> id)
	{
		List<Center> centerById = new ArrayList<>();
		if(id.isPresent()) {
			centerById.add(centerService.getById(id));
			return centerById;
		}
		
		return centerService.getAdoptionCenters();
		
	}
	
	@PutMapping("/adoption-centers")
	public Center updateAdoptionCenter(@RequestBody Center center) {
		return centerService.updateCenter(center);
	}
	
	@DeleteMapping("/adoption-centers/{id}")
	public void deleteAdoptionCenter(@PathVariable int id) {
		centerService.deleteAdoptionCenter(id);
	}
	
	@PostMapping("/adoption-centers")
	public Center addAdoptionCenter(@RequestBody Center adoption) {
		return centerService.saveCenter(adoption);
	}
}
