package com.example.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
@Table(name ="rating")
public class Rating {
	@Id
	@GeneratedValue
	private int id;
	
	
	//@JsonBackReference(value="user-rating")
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name="user")
	@JsonIgnoreProperties(ignoreUnknown=true,value="ratings")
	private User user;
	
    ///@JsonBackReference(value="center-rating")
	@ManyToOne(cascade = CascadeType.MERGE)
	@JsonIgnoreProperties(ignoreUnknown=true,value="ratings")
	@JoinColumn(name="center")
	private Center center;
	
	private int rate;
	
	public Rating() {}
	public Rating(User user, Center center, int rate) {
		this.user = user;
		this.center = center;
		this.rate = rate;
	}
	public int getId() {
		return id;
	}
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public int getRate() {
		return rate;
	}
	public void setRate(int rate) {
		this.rate = rate;
	}
	public Center getCenter() {
		return center;
	}
	public void setCenter(Center center) {
		this.center = center;
	}
	
	
	
	
	
}	

