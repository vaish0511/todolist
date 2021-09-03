
import React, { useState } from 'react';
export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit=(e)=>{
  e.preventDefault();

  if(!title||!desc){
    alert("Title and description cannot be empty");
  }
  addTodo(title,desc);
  setTitle("");
  setDesc("");
    }
    return (
        <div className="container">
            <h4 >AddTodo</h4>
            <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlfor="exampleInputEmail1"className="form-label">Todo-Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <div className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlfor="exampleInputPassword1" class="form-label">Title-Descripton</label>
    <input type="text" className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
  </div>
 
  <button type="submit" className="btn btn-success btn-sm">Add</button>
</form>
        </div>
    )
}
