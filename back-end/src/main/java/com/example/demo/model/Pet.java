package com.example.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
@Table(name = "PET")
public class Pet {
	@Id
	@GeneratedValue
	private int id;
	private String type;
	private String name;
	private int age;
	private boolean vaccinated;
	private String breed;
	private boolean adopted;
	private String image;
	private boolean inShelter;
	
	
	@JsonBackReference(value="center-pet")
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
	@JoinColumn(name = "center")
	private Center center;
	
	
	@JsonBackReference(value="owner-pet")
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
	@JoinColumn(name = "user")
	private User owner;
//	

public Pet() {
		
	}
	
	public Pet(String type,String name, int age, boolean vaccinated,String breed, boolean adopted, boolean inShelter, Center center) {
		this.type = type;
		this.name = name;
		this.age = age;
		this.vaccinated = vaccinated;
		this.breed = breed;
		this.adopted = adopted;
		this.inShelter = inShelter;
		this.center = center;
	}
	
	
	public boolean isInShelter() {
		return inShelter;
	}
	public void setInShelter(boolean inShelter) {
		this.inShelter = inShelter;
	}
	
	
	
	public Center getCenter() {
		return this.center;
	}
	
	public void setCenter(Center center) {
		this.center = center;
	}
	
	public User getOwner() {
		return owner;
	}
	public void setOwner(User u) {
		this.owner = u;
	}
	public int getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public boolean isVaccinated() {
		return vaccinated;
	}
	public void setVaccinated(boolean vaccinated) {
		this.vaccinated = vaccinated;
	}
	public String getBreed() {
		return breed;
	}
	public void setBreed(String breed) {
		this.breed = breed;
	}
	public boolean isAdopted() {
		return adopted;
	}
	public void setAdopted(boolean adopted) {
		this.adopted = adopted;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
}
