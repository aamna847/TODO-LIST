#! /usr/bin/env/node
import inquirer from "inquirer";
let todos=[];
//While ki condition k liye hum ne ik condition ka variable bnaya h jisko hum true krdengy.
let condition=true;

while(condition){
let ans = await inquirer.prompt ([
          {
            name:"select",
            type:"list",
            message:"Select an operation.",
            choices:["Add","update","view","delete","exit"],
          }
        ]);
if (ans.select  ===  "Add"){
  let addTodo = await inquirer.prompt({
    name:"todo",
      //validate function is liye use hota h phle wo trim krta h whitespace characters ko or user k input ko check krta h k wo blank h k nhi.
    validate:function(input){
      if(input.trim()== ""){
        return"Please enter a non-empty-item."
}
return true;
    }
  })
  if(addTodo.todo.trim() !== "")
  todos.push(addTodo.todo);
  todos.forEach(todo =>console.log(todo));
  }
if (ans.select  ===  "update"){
  let updateTodo = await inquirer.prompt({
    name:"todo",
    type:"list",
    message:"update items in the list",
    choices: todos.map(item => item)
  })
  let addTodo = await inquirer.prompt({
    name:"todo",
    type:"input",
    message:"Add items in the list",
  })
 let newTodo:any = todos.filter(val => val !== updateTodo.todo)
 todos = [...newTodo,addTodo.todo];
 console.log(todos);
}
if (ans.select  ===  "view"){
  console.log(todos);
}
if (ans.select  ===  "delete"){
  let deleteTodo = await inquirer.prompt({
    name:"todo",
    type:"list",
    message:"delete items in the list",
    choices: todos.map(item => item)
  })
  let newTodo:any = todos.filter(val => val !== deleteTodo.todo)
todos=[...newTodo];
todos.forEach(todo=>console.log(todo))
}
if (ans.select  ===  "exit"){
  console.log("Exiting Program...");
  //condition ko false krnay se loop main jo kaam kiya tha wo khatam hogya h.
condition = false;
}
}


  