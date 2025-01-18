// class is a template for creating objects  provides initial values for variables and define methods 

class User{
    static count=0;
    // static variables are class level variables accesed only by class 
    constructor(name){
        User.count+=1;
        this.name=name
        console.log("New User Created"); 
        console.log("Hi "+this.name);
        
    }
    // runs whenever an instance of the class aka object is created 
    // variables in a class defined using this key word 

    // methods in a class 
    run(){
        console.log('Running the application');
        
    }

    exit(){
        console.log('Exiting the application');
    }
}

// class inheritance is a way for one class to extend another class done using extend keyword
class student extends User{
    constructor(name){
        super(name)
        console.log("Hi "+name);
    }
    // when a class extends another class it must call super class constructor which called using super()

    materials(){
        console.log("These are the materials you need ");
        
    }
    run(){
        console.log("Student application running ");
        // creating a method with same name as parent class is called  method overriding  only students methods is taken 
        super.run()
        // parent class methods can be accesed using super keyword 
    }

    static users(){
        console.log("This is a class method");
        
    }
    // belongs to class rather than a object 
}


let user1=new User("vedananda ")
user1.run()
user1.exit()

let stud=new student("Anand")
console.log("Your name is "+stud.name);
stud.run()
// by extending a class it has acess to its methods 
student.users()

let val=user1 instanceof User;
// checks if the object is created using that class or its child class 
console.log(val);
let user2=new User("Any")
console.log(User.count)




