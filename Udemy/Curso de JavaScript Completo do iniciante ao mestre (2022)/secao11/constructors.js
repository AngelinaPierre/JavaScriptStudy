function Task(name){
    "use strict";
    console.log(this);
    if(this === undefined) return

    let _name = name;
    this.createdAt = new Date();
    this.updatedAt = null;
    this.changeName = function(newName){
        if(newName){
            _name = newName;
            this.updatedAt = new Date();
        }else{
            console.log("digita um nome para a tarefa!");
        }
    }
    this.getName = function(){
        return _name;
    }
    // this.getName = () =>{
    //     return _name;
    // }
}

const task1 = new Task("minha tarefa");
const task2 = new Task("tarefa 2");

// task1.changeName();

// console.log(task1);
// console.log(task1.getName());

// task1.changeName("lalalal");
// console.log(task1.getName());

// console.log(task1._name);
console.log(task2);


