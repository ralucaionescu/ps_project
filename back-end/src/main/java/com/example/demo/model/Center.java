package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "center")

public class Center {
	@Id
	@GeneratedValue
	private int id;
	
	private String name;
	private String city;
	
	@Column(length = 1000)
	private String description;
	
	 
	@JsonManagedReference(value="center-pet")
    @OneToMany(mappedBy = "center")
	
    private List<Pet> pets;
    
	//@JsonBackReference(value="center-rating")
    @OneToMany(mappedBy = "center")
    private List<Rating> ratings;
    
	public Center() {}
	public Center(String name, String city, String description) {
		this.name=name;
		this.city=city;
		this.description = description;
		this.pets = new ArrayList<Pet>();
		this.ratings = new ArrayList<Rating>();
	}
	
	
	
	public String getDescription()
	{
		return this.description;
	}
	
	public void setDescription(String d) {
		this.description = d;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public List<Pet> getPets(){
		return this.pets;
	}
	public int getId() {
		return this.id;
	}
	public void addPet(Pet pet) {
		this.pets.add(pet);
	}
	
	public List<Rating> getRatings() {
		return ratings;
	}
	public void setRatings(List<Rating> ratings) {
		this.ratings = ratings;
	}
	
	
	
}
