package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "USER")
public class User {
    
	@Id
	@GeneratedValue
	private int id;
	
    private String email;
     
    private String password;
     
    private String firstName;
     
    private String lastName;
     
	public User() {}
    public User(String email, String password, String firstName, String lastName) {
		
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
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

    
}