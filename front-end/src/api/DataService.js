import axios from 'axios';

class myService {
    executeHomeService(){
        console.log('executed home service to get all books')
        return axios.get('http://localhost:9000/book')
        //return axios.get('http://localhost:9000/api/bgtext')
        
    }
    executeBookService(count){
        console.log('executed book service to get selected books- chapters' );
        return axios.get(`http://localhost:9000/book/${count}`)
    }
    executeBookServiceTexts(bookNo, chapterNo){
        console.log('executed book service to get texts from the selected chapter' );
        return axios.get(`http://localhost:9000/book/${bookNo}/${chapterNo}`)
    }

    executeUserServiceGetAll(){
        console.log('executed get all user service')
        return axios.get('http://localhost:9000/users')     
    }
    executeUserServiceGetUser(email){
        console.log('executed get one user by email - service')
        return axios.get(`http://localhost:9000/users/${email}`)     
    }

    executeUserServicePost(user){
        console.log('executed post user service')
        return axios.post('http://localhost:9000/users', user)
        
    }

    executeUserServiceUpdate(user){
        console.log('executed update/put user service')
        return axios.put(`http://localhost:9000/users/${user.email}`, user)     
    }
    executeUserServiceDelete(email){
        console.log('executed delete user by email service')
        return axios.delete(`http://localhost:9000/users/${email}`)
    }

}

export default new myService()