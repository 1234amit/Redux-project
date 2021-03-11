import React from 'react'

/**
* @author
* @function AddTodo
**/

const AddTodo = (props) => {

  const submitTodo = (e) =>{
    e.preventDefault();
    props.addTodo();
  }
  return(
    <div>
        <form onSubmit={submitTodo}>
            <input type="text" 
            name={props.name} 
            value={props.value} 
            onChange={props.onChange}
            placeholder={'Enter Your Data'} 
            />
        </form>
    </div>
   )

 }

export default AddTodo