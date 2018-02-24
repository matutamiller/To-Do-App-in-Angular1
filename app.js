'use strict';
var app = angular.module("toDoApp", []);      //creating angular module
app.controller("ToDoCtrl", ToDoCtrl);         //creating controller and declarating it in module

function ToDoCtrl() {                         //creating controller function
    this.editMode = false;                    //setting defaults to edit todos mode
    this.todos = [];                          //creating an empty array for todos
    this.addNewToDo = function () {           //creating function for new todo adding
        this.todos.push(this.newToDo);
        this.newToDo = "";
    };
    this.triggerEditMode = function () {      //setting function for  toggling edit mode
        this.editMode = !this.editMode;
    };
    this.deleteToDo = function (index) {      //setting function for deleting todos
        this.todos.splice(index, 1);
    };
}