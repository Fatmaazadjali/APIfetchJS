

class User{
    cnt = 0;
    constructor(name, address, age){
     this.cnt+=1;
     this.name = name;
     this.address = address;
     this.age = age;

    } 


    getinfo(){
        console.log(`hello mr/ms ${this.name} \n  your addres is ${this.address} \n your age is ${this.age}`);
    }

    
}
let user = new User ("fa", "om", 22);
  
user.getinfo(); 