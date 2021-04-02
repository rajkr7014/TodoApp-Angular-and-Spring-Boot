import { Component, OnInit } from '@angular/core';
export class Todo{
  constructor(public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date)
    {}
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos=[
    new Todo(1,'Learn to Dance',false,new Date()),
    new Todo(2,'Learn Angular',false,new Date()),
    new Todo(3,'Visit India',true,new Date())
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
