(function(){
    "use strict";

    // ARMAZENAR O DOM EM VARIAVEIS
    const itemInput = document.getElementById("item-input");
    const todoAddForm = document.getElementById("todo-add");
    const ul = document.getElementById("todo-list");
    const lis = ul.getElementsByTagName("li");
    
    // crie uma funcao construtora chamada Task. 
    function Task(name, completed, createAt, updateAt){
        "use strict"
        
        if(!name){
            throw new Error("Task need a required parameter!");
        }
        let _name = name;
        this.getName = function(){
            console.log("usando o metodo");
            return _name;
        }
        // this.name = this.getName();
        this.changeName = function(newName){
            if(newName){
                _name = newName;
                this.updatedAt = new Date();
            }else{
                console.log("digita um nome para a tarefa!");
            }
        }
        
        this.completed = completed || false;
        this.createAt = createAt || Date.now();
        this.updateAt = updateAt || null;
        this.toggleDone = function(){
            this.completed = !this.completed;
        }
    }

    // função para recuperar data do 'localStorage'.
    function getSavedData(){
        let tasksData = localStorage.getItem("tasks");
        tasksData = JSON.parse(tasksData);

        return (tasksData && tasksData.length) ? tasksData : [
            {
                name: "task 1",
                createAt: Date.now(),
                completed: false,
            },
            {
                name: "task 2",
                createAt: Date.now(),
                completed: false,
            },
        ];
    }

    let arrTasks = getSavedData();

    // a partir de um array de objetos literais, crie um array contendo instancias de Tasks. 
    // Essa array deve chamar arrInstancesTasks
	const arrInstancesTasks = arrTasks.map( task => {
        const {name, completed, createAt, updateAt} = task;
        return new Task(name, completed, createAt,updateAt);
    });

    // função para salvar no 'localStorage'.
    function setNewData(){
        localStorage.setItem("tasks", JSON.stringify(arrInstancesTasks));
    }
    setNewData();

    // função para gerar cada li da task dinamicamente
    function generateLiTask(obj){
        const li  = document.createElement("li");
        const p = document.createElement("p");
        const checkButton = document.createElement("button");
        const editButton = document.createElement("i");
        const deleteButton = document.createElement("i");
        const editContainer = document.createElement("div");
        const editInputContainer = document.createElement("input");
        const editButtonContainer = document.createElement("button");
        const editCancelButtonContainer = document.createElement("button");

        // CONTAINER DE LIS

        li.className = "todo-item";
        checkButton.className = "button-check";

        checkButton.innerHTML = `
            <i class="fas fa-check ${obj.completed ? "" : "displayNone"}" data-action="checkButton"></i>
        `;
        checkButton.setAttribute("data-action", "checkButton");

        li.appendChild(checkButton);

        p.className = "task-name";
        p.textContent = obj.getName();
        li.appendChild(p);

        editButton.className = "fas fa-edit";
        editButton.setAttribute("data-action", "editButton");
        li.appendChild(editButton);

        // CONTAINER DE EDIÇÃO

        editContainer.className = "editContainer";

        editInputContainer.className = "editInput";
        editInputContainer.setAttribute("type", "text");
        editInputContainer.value = obj.getName();
        editContainer.appendChild(editInputContainer);

        editButtonContainer.className = "editButton";
        editButtonContainer.textContent = "Edit";
        editButtonContainer.setAttribute("data-action","editButtonContainer");
        editContainer.appendChild(editButtonContainer);

        editCancelButtonContainer.className = "cancelButton";
        editCancelButtonContainer.textContent = "Cancel";
        editCancelButtonContainer.setAttribute("data-action","editCancelButtonContainer");
        editContainer.appendChild(editCancelButtonContainer);

        li.appendChild(editContainer);

        deleteButton.className = "fas fa-trash-alt";
        deleteButton.setAttribute("data-action","deleteButton");
        li.appendChild(deleteButton);

        return li;

    }
    
    
    // função para renderizar a tela sempre que houver uma atualização
    function renderTasks(){
        ul.innerHTML = "";
        arrInstancesTasks.forEach(taskobj => {
            ul.appendChild(generateLiTask(taskobj));
        });
    }
    
    
    //função para gerar li para Task
    function addTask(task){
        arrInstancesTasks.push(new Task(task));
        setNewData();
    }
    
    // eventListener do formulario
    todoAddForm.addEventListener("submit", function(evt){
        evt.preventDefault();
        addTask(itemInput.value);
        renderTasks();
        itemInput.value = "";
        itemInput.focus();
    });

    // função com a logica para o click dentro da ul
    function clickedUl(evt){
        const dataAction = evt.target.getAttribute("data-action");
        if(!dataAction){
            return;
        }
        let currentLi = evt.target;
        while(currentLi.nodeName !== "LI"){
            currentLi = currentLi.parentElement;
        }

        const currentLiIndex = [...lis].indexOf(currentLi);

        const actions = {
            checkButton: function(){
                arrInstancesTasks[currentLiIndex].toggleDone();
                if(arrInstancesTasks[currentLiIndex].completed){
                    currentLi.querySelector(".fa-check").classList.remove("displayNone");
                }else{
                    currentLi.querySelector(".fa-check").classList.add("displayNone");
                }
                setNewData();
            },
            editButton: function(){
                const editContainer = currentLi.querySelector(".editContainer");
                [...ul.querySelectorAll(".editContainer")].forEach( container => {
                    container.removeAttribute("style");
                });
                editContainer.style.display = "flex";
                editContainer.querySelector(".editInput").focus();
            },
            editButtonContainer: function(){
                const value = currentLi.querySelector(".editInput").value;
                arrInstancesTasks[currentLiIndex].changeName(value);
                renderTasks();
                setNewData();
            },
            editCancelButtonContainer: function(){
                const editContainer = currentLi.querySelector(".editContainer");
                editContainer.style.display = "none";
                currentLi.querySelector(".editInput").value = arrInstancesTasks[currentLiIndex].getName();
            },
            deleteButton: function(){
                arrInstancesTasks.splice(currentLiIndex, 1); // somente 1 item
                renderTasks();
                setNewData();
            }
        }

        if(actions[dataAction]){
            actions[dataAction]();
        }
        
    }

    // eventListener para os botões dentro da ul
    ul.addEventListener("click", clickedUl);

    renderTasks();
    
})()
