import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect} from 'react';
import Header from "./mycomponents/Header";
import { Footer } from "./mycomponents/Footer";
import { About } from "./mycomponents/About"; 

import { AddTodo } from "./mycomponents/AddTodo";
import { Todos } from "./mycomponents/Todos";
// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
settodos(todos.filter((e)=>{
  return e!==todo;
}))
localStorage.getItem("todos");
  }
  const addTodo=(title,desc)=>{
console.log("i am adding this",title,desc)
let sno;
if(todos.length===0){
  sno=0;
}else{
  let sno = todos[todos.length-1].sno+1;
}

const mytodo={
  sno:sno,
  title:title,
  desc:desc,
}
settodos([...todos,mytodo]);

  }
  const[todos,settodos]=useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
    
    
  }, [todos])
  
  
  return (
    <Router>
     <Header title="To-Do-list"/>
     <Switch>
          <Route exact path="/" render={()=>{
          return (<>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
            </>)
          }}>
          
            </Route>
            <Route exact path="/about">
            <About />  
          </Route>
         
        
        </Switch>
    
    <Footer/>
   

    </Router>
  );
}

export default App;
