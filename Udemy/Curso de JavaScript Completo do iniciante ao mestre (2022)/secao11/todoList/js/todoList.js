(function(){
    "use strict";

    // ARMAZENAR O DOM EM VARIAVEIS
    const itemInput = document.getElementById("item-input");
    const todoAddForm = document.getElementById("todo-add");
    const ul = document.getElementById("todo-list");
    const lis = ul.getElementsByTagName("li");
    
    // crie uma funcao construtora chamada Task. 
    function Task(name, completed, createdAt, updateAt){
        "use strict"
        
        // essa funcao recebe por parametro obrigatório o nome da tarefa
        if(!name){
            console.log(this.name);
            throw new Error("Task need a required parameter!");
        }
        // this.name = name;
        let _name = name;
        this.getName = () => _name;
        this.setName = function(newName){
            _name = newName;
            this.updateAt = Date.now();
            console.log("------------------");
            console.log(this);

        }
        // também recebe tres parametros opcionais (completed, createdAt, updatedAt)
        // o objeto retornado por essa funcao deve ter quatro propriedades:
        //  - name - string - obrigatório, 
        //  - completed - boolean - opcional, false é o default, 
        this.completed = completed || false;
        //  - createdAt - timestamp - opcional, timestamp atual é o valor default) 
        this.createdAt = createdAt || Date.now();
        //  - updatedAt - timestamp - opcional, null é o valor default
        this.updateAt = updateAt || null;
        // o objeto retornado por essa funcao deve ter um método chamado toggleDone, que deve inverter o boolean completed
        this.toggleDone = function(){
            console.log(this.completed);
            this.completed = !this.completed;
        }
    }

    let arrTasks = getSavedData();

    // função para recuperar data do 'localStorage'.
    function getSavedData(){
        let tasksData = localStorage.getItem("tasks");
        tasksData = JSON.parse(tasksData);

        return (tasksData && tasksData.length) ? tasksData : [
            {
                name: "task 1",
                createdAt: Date.now(),
                completed: false,
                updateAt: null,
            },
            {
                name: "task 2",
                createdAt: Date.now(),
                completed: false,
                updateAt: null,
            },
        ];
    }

    // a partir de um array de objetos literais, crie um array contendo instancias de Tasks. 
    // Essa array deve chamar arrInstancesTasks
	const arrInstancesTasks = arrTasks.map( task => {
        const {name, completed, createdAt, updateAt} = task;
        console.log(name);
        // console.log(task.name); 
        return new Task(name, completed, createdAt,updateAt);
    });

    
    // função para salvar no 'localStorage'.
    function setNewData(){
        localStorage.setItem("tasks", JSON.stringify(arrInstancesTasks));
    }
    setNewData();

    // função para gerar cada li da task dinamicamente
    function generateLiTask(obj){
        // criando elementos para o dom dinamicamente.
        const li  = document.createElement("li");
        const p = document.createElement("p");
        const checkButton = document.createElement("button");
        const editButton = document.createElement("i");
        const deleteButton = document.createElement("i");
        // container de edição que abre ao clicar no icone
        const editContainer = document.createElement("div");
        const editInputContainer = document.createElement("input");
        const editButtonContainer = document.createElement("button");
        const editCancelButtonContainer = document.createElement("button");

        // CONTAINER DE LIS

        // adicionando classe css 
        li.className = "todo-item";
        checkButton.className = "button-check";

        // criando o elemento com o icone personalizado do checkbutton
        checkButton.innerHTML = `
            <i class="fas fa-check ${obj.completed ? "" : "displayNone"}" data-action="checkButton"></i>
        `;
        // adicionando atributo ao checkbutton
        checkButton.setAttribute("data-action", "checkButton");

        // adicionando a li o checkbutton
        li.appendChild(checkButton);

        // adicionando classe ao paragrafo
        p.className = "task-name";
        // adicionado texto ao paragrado
        p.textContent = obj.getName();
        // adicionando paragrafo a li
        li.appendChild(p);

        // adicionando classe ao botão de editar
        editButton.className = "fas fa-edit";
        // adicionando atributo
        editButton.setAttribute("data-action", "editButton");
        // adicionando botão de edit na li
        li.appendChild(editButton);

        // CONTAINER DE EDIÇÃO

        // adicionado classe ao container de edição
        editContainer.className = "editContainer";

        // adicionando classe ao input de edição dentro do container de edição
        editInputContainer.className = "editInput";
        // adicioando atributo ao input de edição dentro do container de edição
        editInputContainer.setAttribute("type", "text");
        // adicionando valor ao input de edição dentro do container de edição
        editInputContainer.value = obj.getName();
        // adicionado input ao container de edição
        editContainer.appendChild(editInputContainer);

        // adicionando classe ao botão de edição dentro do container de edição
        editButtonContainer.className = "editButton";
        // adicionando texto ao botão de edição dentro do container de edição
        editButtonContainer.textContent = "Edit";
        // adicionando atributo ao botão de edição dentro do container de edição
        editButtonContainer.setAttribute("data-action","editButtonContainer");
        // adicionando botão de edição ao container de edição
        editContainer.appendChild(editButtonContainer);

        // adicionado classe ao botão de cancelar do container de edição
        editCancelButtonContainer.className = "cancelButton";
        // adicionado texto ao botão de cancelar do container de edição
        editCancelButtonContainer.textContent = "Cancel";
        // adicionando atributo ao botão de cancelar do container de edição
        editCancelButtonContainer.setAttribute("data-action","editCancelButtonContainer");
        // adicionando botão de cancelar dentro do container de edição
        editContainer.appendChild(editCancelButtonContainer);

        // adicionando o container de edição A LI
        li.appendChild(editContainer);

        //adicioando classe ao botão de deletar na li
        deleteButton.className = "fas fa-trash-alt";
        // adicionando atributo ao botão de deletar na li
        deleteButton.setAttribute("data-action","deleteButton");
        // adicionando botçao de deletar na li
        li.appendChild(deleteButton);

        return li;

    }
    
    
    // função para renderizar a tela sempre que houver uma atualização
    function renderTasks(){
        ul.innerHTML = "";
        arrInstancesTasks.forEach(taskobj => {
            ul.appendChild(generateLiTask(taskobj));
        });
        setNewData();
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
        // selecionando elementos que possuem o atributo 'data-action'
        const dataAction = evt.target.getAttribute("data-action");
        if(!dataAction){
            return;
        }
        // recuperando a li clicada dentro da ul
        let currentLi = evt.target;
        // loop para percorer cada elemento da ul até acharmos o `li` que clicamos
        while(currentLi.nodeName !== "LI"){
            currentLi = currentLi.parentElement;
        }

        // peganod o indice da li clicada fazendo uma varredura nas lis existentes
        const currentLiIndex = [...lis].indexOf(currentLi);

        // criando um `objeto` de ações para os botões dentro da ul
        const actions = {
            // botão de checagem de tarefa
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
                // armazenando elemento do dom na variaveis
                const editContainer = currentLi.querySelector(".editContainer");
                console.log(editContainer);
                // varredura nos elementos da ul
                [...ul.querySelectorAll(".editContainer")].forEach( container => {
                    container.removeAttribute("style");
                });
                editContainer.style.display = "flex";
                editContainer.querySelector(".editInput").focus();
            },
            editButtonContainer: function(){
                // recuperando novo valor do input de edição.
                const value = currentLi.querySelector(".editInput").value;
                // adicionando novo valor de input a task dentro do array de tasks
                arrInstancesTasks[currentLiIndex].setName(value);
                // renderizando alteração
                renderTasks();
                // salvando no 'localStorage'
                setNewData();
            },
            editCancelButtonContainer: function(){
                // criando variavel para guardar o container de edição do elemento
                const editContainer = currentLi.querySelector(".editContainer");
                // colocando o display:none para esconder o container de edição
                editContainer.style.display = "none";
                // deixando o valor do input igual ao da fonte de dados depois de cancelar
                currentLi.querySelector(".editInput").value = arrInstancesTasks[currentLiIndex].getName();
            },
            deleteButton: function(){
                // separando do array usando o indice
                arrInstancesTasks.splice(currentLiIndex, 1); // somente 1 item
                // renderizando alterações
                renderTasks();
                // setando no 'localStorage'
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
