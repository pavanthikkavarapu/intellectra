import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:any
  addtodo
  userId
  constructor(private route: ActivatedRoute,private http: HttpClient) {
    this.addtodo = ''

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
     this.userId = +params.get('userid')
     console.log('userid ',this.userId)
     this.http.get('https://jsonplaceholder.typicode.com/todos?userId='+this.userId).subscribe(data => {
      // Read the result field from the JSON response.
      console.log('result http call '+JSON.stringify(data))
      this.todos = data;
      localStorage.LocalStoragetodos = data
    });

    })
  }

  addTodo(newtodo,todolength){
    
    this.todos.push({
      userId:this.userId,
      id:todolength+1,
      title:newtodo,
      completed:false
    })
    console.log('oldtodo todo '+JSON.stringify(this.todos))
    this.addtodo = ''
  }

  onStatusChanged(statusChanged,todoId){
    console.log('statusChanged '+todoId)
    this.http.put('https://jsonplaceholder.typicode.com/todos/'+todoId,statusChanged).subscribe(res =>{
      console.log('status changed sucessfuly')
    })
  }

  saveTodos(savetodos){
    console.log('savetodos '+JSON.stringify(savetodos))
    this.http.post('https://jsonplaceholder.typicode.com/todos',savetodos).subscribe(res =>{
      console.log('status changed sucessfuly')
    })
  }
  
  delTodo(todoID){
    console.log('todoID '+JSON.stringify(todoID))
    this.http.delete('https://jsonplaceholder.typicode.com/todos/'+todoID).subscribe(res =>{
      console.log('status changed sucessfuly'+JSON.stringify(res))
    })
  }

}
