package com.srivishnus.slokas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.srivishnus.slokas.entity.User;



//Spring will automatically come here - create CRUD DB operation for User entity
@Repository
public interface UserRepository extends JpaRepository<User, String>{

}
/*
 * @Query(value="Update user set user_name =:user_name,password =:password where
 *  user_id =:user_id",nativeQuery = true)
 *  Integer updateUser()
 *  If you need to add youe own search - 
 */
