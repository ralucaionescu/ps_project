package com.example.demo.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Data;

@Data
@Embeddable	
public class RatingKey  implements Serializable {
	   @Column(name = "user")
	    private int userId;
	 
	    @Column(name = "center")
	    private int centerId;
}
