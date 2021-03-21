package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

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

	public Pet(String type, String name, int age, boolean vaccinated, String breed, boolean adopted) {
		this.type = type;
		this.name = name;
		this.age = age;
		this.vaccinated = vaccinated;
		this.breed = breed;
		this.adopted = adopted;
	}
	public Pet() {
		
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
}
