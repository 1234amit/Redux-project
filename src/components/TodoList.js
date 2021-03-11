import React from 'react'
import {connect} from 'react-redux'
import { deleteTodo } from '../store/actions'
/**
* @author
* @function TodoList
**/

const TodoList = (props) => {
  return(
    <div>
        <ul>
            {
                props.todos.length>0 ? props.todos.map(todo=>
                <li key={todo.id} onClick={()=>props.deleteTodo(todo.id)}>{todo.todo}</li>): null
            }
        </ul>
    </div>
   )

 }

 const mapStateToProps = state => {
     return{
        todos:state.todos
     }
 }

 const mapDispatchToProps = dispatch =>{
     return{
         deleteTodo:(id)=>dispatch(deleteTodo(id))
     }
 }

 const connectedComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectedComponent(TodoList)