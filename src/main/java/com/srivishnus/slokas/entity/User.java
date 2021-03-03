package com.srivishnus.slokas.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

// Entity annotation to make this class as a JPA entity - 
@Entity
//Table annotation to provide the table details in DB table
@Table(name = "user")
public class User {

	@Column(name = "first_name")
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;
	
	//to make email as primary key? 
	@Id
	@Column(name = "email")
	private String email;
	
	@Column(name = "password")
	private String userPassword;
	
	
	
	public User() {
		
	}
	public User(String firstName, String lastName, String email, String userPassword) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.userPassword = userPassword;
	}
	
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	
	
	@Override
	public String toString() {
		return "User [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + "]";
	}
	
	
}

/*
 * public List<Employee> getAllEmployees(){ String sql =
 * "SELECT * FROM employee"; List<Map<String, Object>> rows =
 * getJdbcTemplate().queryForList(sql); List<Employee> result = new
 * ArrayList<Employee>(); for(Map<String, Object> row:rows){ Employee emp = new
 * Employee(); emp.setEmpId((String)row.get("empId"));
 * emp.setEmpName((String)row.get("empName")); result.add(emp); } return result;
 * }
 */