;(function(){

    "use strict";

    // armazenar o DOM em variaveis
    const itemInput = document.getElementById("item-input"); // input
    const todoAddForm = document.getElementById("todo-add"); // formulario
    const ul  = document.getElementById("todo-list");
    const lis = ul.getElementsByTagName("li"); // coleção de todas as lis do html

    let arrTasks = getSavedData();

    function getSavedData(){ 
        let tasksData =  localStorage.getItem("tasks");
        tasksData = JSON.parse(tasksData);
        
        
        return tasksData && tasksData.length ? tasksData : [
            {
                name: "task 1",
                createAt: Date.now(),
                completed:false,
            },
            {
                name: "task 2",
                createAt: Date.now(),
                completed: false,
            }
        ];
    }

    function setNewData(){
        localStorage.setItem("tasks", JSON.stringify(arrTasks));
    }

    setNewData();

    // função para gerar lis
    function generateLiTask(obj){
        // debugger;
        const li = document.createElement("li");
        const p = document.createElement("p");
        const checkButton = document.createElement("button");
        const editButton = document.createElement("i");
        const deleteButton = document.createElement("i");
        const containerEdit = document.createElement("div");
        const inputEdit = document.createElement("input");
        const containerEditButton = document.createElement("button");
        const containerCancelButton = document.createElement("button");

        li.className = "todo-item";

        checkButton.className = "button-check";
        checkButton.innerHTML = `
            <i class="fas fa-check ${obj.completed ? "" : "displayNone"}" data-action="checkButton"></i>
        `;
        checkButton.setAttribute("data-action", "checkButton");

        li.appendChild(checkButton);

        p.className = "task-name";
        p.textContent = obj.name;
        li.appendChild(p);

        editButton.className = "fas fa-edit";
        editButton.setAttribute("data-action", "editButton");
        li.appendChild(editButton);

        containerEdit.className = "editContainer";

        inputEdit.setAttribute("type", "text");
        inputEdit.className = "editInput";
        inputEdit.value = obj.name;
        containerEdit.appendChild(inputEdit);

        containerEditButton.className = "editButton";
        containerEditButton.textContent = "Edit";
        containerEditButton.setAttribute("data-action", "containerEditButton");
        containerEdit.appendChild(containerEditButton);

        containerCancelButton.className = "cancelButton";
        containerCancelButton.textContent = "Cancel";
        containerCancelButton.setAttribute("data-action", "containerCancelButton");
        containerEdit.appendChild(containerCancelButton);

        li.appendChild(containerEdit);

        deleteButton.className = "fas fa-trash-alt";
        deleteButton.setAttribute("data-action", "deleteButton");
        li.appendChild(deleteButton);

        // addEventLi(li);
        return li;
    }

    // função para renderizar as lis/tasks
    function renderTasks(){
        ul.innerHTML = "";
        arrTasks.forEach(taskObj => {
            ul.appendChild(generateLiTask(taskObj));
        });
    };

    // criando função para adicionar tasks
    function addTask(task){
        arrTasks.push({
            name: task,
            createAt: Date.now(),
            completed: false
        });
        setNewData();
    };
    
    function clickedUL(evt){
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
                console.log("checkButton no objeto.");
                arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex].completed;
                console.log(arrTasks[currentLiIndex].completed);

                if(arrTasks[currentLiIndex].completed){
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
            containerEditButton: function(){
                const value = currentLi.querySelector(".editInput").value;
                arrTasks[currentLiIndex].name = value;
                renderTasks();
                setNewData();
            },
            containerCancelButton: function(){
                const editContainer = currentLi.querySelector(".editContainer");
                editContainer.style.display = "none";

                // outra forma
                // currentLi.querySelector(".editContainer").removeAttribute("style");

                // deixando o valor igual ao da fonte de dados
                currentLi.querySelector(".editInput").value = arrTasks[currentLiIndex].name;
                
            },
            deleteButton: function(){
                console.log("deleteButton no objeto.");
                arrTasks.splice(currentLiIndex, 1);
                console.log(arrTasks);
                renderTasks();
                // currentLi.remove();
                // currentLi.parentElement.removeChild(currentLi);
                setNewData();
            }
        }

        if(actions[dataAction]){
            actions[dataAction]();
        }

    }

    // event listener forms
    todoAddForm.addEventListener("submit", function(evt){
        evt.preventDefault();

        addTask(itemInput.value);   
        renderTasks();
        itemInput.value = ""; // resetando o input
        itemInput.focus(); //  gerando foco para o input

    });

    ul.addEventListener("click", clickedUL);
    
    renderTasks();

})();
