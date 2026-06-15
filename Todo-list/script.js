
let toDos=[];


function takeTodo(){

    let input=document.getElementById('toDoInput');
    let date=document.getElementById('toDoDate');

    toDos.push(
        {
            todo :input.value,
            time :date.value
        }
    );

    input.value='';
    date.value='';

    console.log(toDos);

}

function displayTodo(){

    let html='';

    // for(let i=0; i < toDos.length; i++){
    //     html+=`<p class="todo-item"><span class="todo-text">${toDos[i].todo}</span>
    //     <span class="todo-date">${toDos[i].time}</span>
    //     <button class="delete-btn" onclick="toDos.splice(${i},1);displayTodo()">Delete</button></p>`;

    // }

    toDos.forEach(
       (toDo,i)=>{

        html+=`<p class="todo-item"><span class="todo-text">${toDo.todo}</span>
        <span class="todo-date">${toDo.time}</span>
        <button class="delete-btn" onclick="toDos.splice(${i},1);displayTodo();">Delete</button></p>`;

            

        }
    )

    

    document.getElementById('display').innerHTML=html;
    
}
document.getElementById('btn').addEventListener('click', function(){takeTodo();displayTodo()});