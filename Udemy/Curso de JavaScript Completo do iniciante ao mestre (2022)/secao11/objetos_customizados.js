function changeName(name){
    console.log(name);
    console.log(this);
    this.name = name;
    this.updatedAt = new Date();
}

const task1 = {
    name: "task 1",
    createdAt: new Date(),
    updatedAt: null,
    completed: false,
    changeName,
}

const task2 = {
    name: "task 2",
    createdAt: new Date(),
    updatedAt: null,
    completed: false,
    changeName
}


task1.name = "task 1 updated";
task1.updatedAt = new Date();

task1.changeName("NOME ATUALIZADO task1");
task2.changeName("Nome atualizado task2");

console.log(task1);
console.log(task2);
