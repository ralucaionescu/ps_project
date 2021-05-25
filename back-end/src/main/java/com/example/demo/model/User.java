package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "user")

public class User {
    
	@Id
	@GeneratedValue
	private int id;
	
    private String email;
     
    private String password;
     
    private String firstName;
     
    private String lastName;
    
    private String role;
    
    @JsonManagedReference(value="owner-pet")
    @OneToMany(mappedBy = "owner")
    private List<Pet> pets;
    
   // @JsonManagedReference(value="user-rating")
    @OneToMany(mappedBy ="user")
    private List<Rating> ratings;
    
	public User() {}
    public User(String email, String password, String firstName, String lastName) {
		
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.pets = new ArrayList<>();
		this.ratings = new ArrayList<Rating>();
	}
    
    
    public void adoptPet(Pet pet) {
    	 pets.add(pet);
    }
    
    public List<Pet> getPets(){
    	return this.pets;
    }
    
    public void setRole(String role) {
    	this.role = role;
    }
    
    public String getRole() {
    	return this.role;
    }
	public int getId() {
		return this.id;
	}
    
    public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public List<Rating> getRatings() {
		return ratings;
	}
	public void setRatings(List<Rating> ratings) {
		this.ratings = ratings;
	}
	
    
}