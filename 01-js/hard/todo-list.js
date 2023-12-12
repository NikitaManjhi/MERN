/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.TodoList=[];
  }

  add(task){
    this.TodoList.push(task);
  }

  remove(index){
    this.TodoList.splice(index,1);
  }

  update(index,task){
    if(index>this.TodoList.length-1){
      return
    }
    this.TodoList[index]=task;
  }

  getAll(){
    return this.TodoList;
  }

  get(index){
    if(index<0 || index>this.TodoList.length-1){
      return null;

    }
    return this.TodoList[index];
  }

  clear(){
    let n=this.TodoList.length;
    this.TodoList.splice(0,n);
  }
}

module.exports = Todo;
